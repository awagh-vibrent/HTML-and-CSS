var app = angular.module("mainApp",[]);

app.controller('people',function($scope,$http) {

    $http.get("http://localhost:8000/")
    .then(function(response){
        console.log(response);
    })
})