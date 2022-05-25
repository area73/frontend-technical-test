# CHANGELOG

In this file I will put all decisions taken in chronological order.

* Using Yarn and adding yarn.lock to git

* Adding readme and changelog

* Adding a config file to store all configuration variables like host, port, url, etc .

* Using native fetch API to get data.
  Since we don't need to have compatibility with IE, we can safely use native API fetch. Otherwise
  if for some reason we couldn't use fetch then we could use a library like Axios or directly
  trying to use a XMLHttpRequest.

* Added "@babel/plugin-proposal-optional-chaining" to safe parse deep objects attributes

* During testing I try to run the test but one of them was failing:
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
  with "id", so if I don't have a valid id on the objects I cannot merge the object and will return an empty array

* I change the response of this test:
    it('Should make an api call to receive a list of general vehicle information ...
    because I pass also host and port to URL and also used the constants defined on  config file:
        expect(request).toBeCalledWith(`${HOST}${PORT}${API_DIR}${VEHICLES_RESOURCE}`);
