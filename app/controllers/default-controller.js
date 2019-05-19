angular.module("filters", [])
.controller("defaultCtrl", ["$scope", "dataService",
function($scope, dataService){
    dataService.getData()
        .then(function(result){
            $scope.products = result;
        })
    
}]);