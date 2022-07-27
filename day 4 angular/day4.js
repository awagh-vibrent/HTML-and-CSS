var app = angular.module('myApp', []);
app.directive('myDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function validation(value) {
                var regx=/^-?[0-9]\d*(\.\d+)?$/;
                if (regx.test(value)) {
                    mCtrl.$setValidity('charE', true);
                } else {
                    mCtrl.$setValidity('charE', false);
                }
                return value;
            }
            mCtrl.$parsers.push(validation);
        }
    };
});