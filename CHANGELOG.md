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
