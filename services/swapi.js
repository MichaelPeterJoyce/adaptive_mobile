var services = angular.module('swapi', []);

services.factory('SwapiService', ['$http',
  function ($http) {
    function Swapi() { };

    Swapi.domain = 'http://swapi.co/api';

    // Gets the starships endpoint
    
    Swapi.starships = function () {
      var path = '/starships';
      var url = Swapi.domain + path;

      return $http.get(url)
        .then(function (response) {
          return response;
        });
    };

    return Swapi;
  }
]);