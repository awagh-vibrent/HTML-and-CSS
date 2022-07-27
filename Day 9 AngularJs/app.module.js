


var app = angular.module('app', ['ui.router']);
app.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: 'register/register.html',
      controller:'register'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller:'login'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'dashboard/dashboard.html',
      controller:'dashboard'
    })
    .state('root', {
    url: '/',
    template: '<h1>Welcome</h1>'
  });
}]);



app.controller('register', function ($scope,$state) {
  $scope.registerForm = function () {
   
        
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const mobile = document.getElementById('phone').value;
     
      const password = document.getElementById('password').value;
      const add = document.getElementById('add').value;
     
      localStorage.setItem('name',name);
      localStorage.setItem('email', email);
      localStorage.setItem('mobile', mobile);
     
      localStorage.setItem('password', password);
      localStorage.setItem('add', add);
      console.log(name, email, mobile, add, password);
      alert("Form submitted Successfully....!!!");
      $state.go("login")
   
    };
});

app.controller('login', function ($scope,$state) {
  $scope.loginform = function () {
   
      console.log("Hi");
      const cemail = document.getElementById('email').value;
      const cpassword = document.getElementById('password').value
      const email=localStorage.getItem('email');
      const password=localStorage.getItem('password');
      if (cemail == email && cpassword == password) {
        alert("Login Successfully....!!!");
        $state.go("dashboard");
      } else {
        alert("Email and Passwor doesn't match")
      }
   
    };
});
app.controller('dashboard', function ($scope, $state) {
  $scope.userName = localStorage.getItem('name');
  $scope.email = localStorage.getItem('email');
  $scope.mobile = localStorage.getItem('mobile');
  $scope.dob = localStorage.getItem('dob');
  $scope.logout = function () {
    window.localStorage.clear();
    $state.go("register");
};
});


