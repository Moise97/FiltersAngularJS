angular.module("filters", [])
.controller("defaultCtrl", ["$scope", "dataService",
function($scope, dataService){
    dataService.getData()
        .then(function(result){
            $scope.products = result;
        });

    $scope.getExpiryDate = function(days) {
        let now = new Date();
        return now.setDate(now.getDate() + days);
    }
    
}]);