angular.module("filters")
.constant("dataUrl", "http://localhost:8080/app/model/dates.json")
.factory("dataService", function($http, dataUrl){
    return {
        getData: function(){
            // return the promise directly
            return $http({
                        method: 'GET',
                        url: dataUrl
                    })
                    .then(response => {     // success
                        return response.data;
                    })
                    .catch(error => {       // failed
                        return error;
                    });
        }
    }
});