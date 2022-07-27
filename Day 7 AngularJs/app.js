let myApp = angular.module("myApp",[]);







myApp.controller('Formcontroller',['$scope',function($scope){
   $scope.register = function(){
   
   
      const fname = document.getElementById('fname').value ;
      const lname = document.getElementById('lname').value ;
      const email = document.getElementById('email').value ;
      const phone = document.getElementById('phone').value ;
      const date = document.getElementById('date').value ;

      localStorage.setItem('fname', fname);
      localStorage.setItem('lname', lname);
      localStorage.setItem('email', email);
      localStorage.setItem('phone', phone);
      localStorage.setItem('date', date);
      console.log( fname, lname , email, phone, date);
      alert("User Registered Successfully");
   }
}]);





myApp.controller('Login',['$scope',function($scope){

}])