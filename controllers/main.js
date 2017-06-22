angularApp.controller('MainCtrl', [
  '$scope',
  'SwapiService',

  function ($scope, SwapiService) {
    $scope.sortType = 'name';     // set the default sort type
    $scope.sortReverse = false;   // set the default sort order
    $scope.searchShip = '';       // set the default search/filter term

    // Sets the checkbox for filtering the columns
    $scope.showName = true;
    $scope.showModel = true;
    $scope.showMan = true;
    $scope.showCost = true;
    $scope.showLength = true;
    $scope.showSpeed = true;
    $scope.showCrew = true;
    $scope.showPassengers = true;
    $scope.showClass = true;
    $scope.showHyper = true;


    SwapiService.starships()
      .then(function (data) {
        $scope.data = data.data.results;
      });

    $scope.formatDate = function (date) {
      var dateOut = new Date(date);
      return dateOut;
    };
  

  }
]);
