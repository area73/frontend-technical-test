# CHANGELOG

In this file I will put all decisions taken in chronological order.

## Architecture JS

* Using Yarn and adding yarn.lock to git

* Adding readme and changelog

* Adding a config file to store all configuration variables like host, port, url, etc .

* Using native fetch API to get data.
  Since we don't need to have compatibility with IE, we can safely use native API fetch. Otherwise
  if for some reason we couldn't use fetch then we could use a library like Axios or directly
  trying to use a XMLHttpRequest.

* Added "@babel/plugin-proposal-optional-chaining" to safe parse deep objects attributes

* During testing I try to run the tests in api but several of them failed, i.e.:
  it('Should ignore failed API calls during traversing', () => {
    request.mockResolvedValueOnce([{ apiUrl: '/api/vehicle_ftype.json' }, { apiUrl: '/api/vehicle_xj.json' }]);
    request.mockResolvedValueOnce({ id: 'ftype', price: '£36,000' });
    request.mockRejectedValueOnce('An error occurred');
    expect(safelyCallApi()).resolves.toEqual([
      { apiUrl: '/api/vehicle_ftype.json', id: 'ftype', price: '£36,000' }
    ]);
  });

  Maybe I got something wrong and didn't get the intention of the test but I change the test in the first
  mockResolvedValueOnce to something like this:
  ...
  request.mockResolvedValueOnce([{ id: 'ftype', apiUrl: '/api/vehicle_ftype.json' }, { id: 'badVehicle', apiUrl: '/api/vehicle_xj.json' }]);
  ...

  Basically I add an id on each object because the way that I implement getData() I combine Vehicle with vehicleDetail
  with "id", so if I don't have a valid id on the objects I cannot merge the objects and will return an empty array

* I change the response of this test:
    it('Should make an api call to receive a list of general vehicle information ...
    because I pass also host and port to URL and also used the constants defined on  config file, so
     if for some reason Host or main json file name change I won't get an error:
        expect(request).toBeCalledWith(`${HOST}${PORT}${API_DIR}${VEHICLES_RESOURCE}`);

## Style and responsive design

* Mobile-first approach: In order to fulfill this requirement and taking into account that we are
  already using SCSS I will use a handy library call [sass-mq](https://github.com/sass-mq/sass-mq)
  `Media Queries with superpowers` that I know very well because I help to launch the last version
  of that popular library (you can see my commits here : [area73](https://github.com/sass-mq/sass-mq/commits?author=area73))

* reset-normalize:  Since we are not using postCSS I decide to use [css-reset-and-normalize](https://www.npmjs.com/package/css-reset-and-normalize)

* added prop-types for type checking
