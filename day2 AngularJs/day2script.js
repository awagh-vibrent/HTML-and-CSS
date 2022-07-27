const app = angular
                .module("myModule",['ui.bootstrap'])
                .controller("myController",function($scope){
                    let employees = [
                        {No : 1 , Obj : "Paper"},
                        {No : 2 , Obj : "Wood"},
                        {No : 3 , Obj : "Book"},
                        {No : 4 , Obj : "Mobile"},
                        {No : 5 , Obj : "Laptop"},
                        {No : 6 , Obj : "Pc"},
                        {No : 7 , Obj : "Paper"},
                        {No : 8 , Obj : "Paper"},
                        {No : 9 , Obj : "Paper"},
                        {No : 10 , Obj : "Paper"},
                        {No : 11 , Obj : "Paper"},
                        {No : 12 , Obj : "Paper"},
                        {No : 13 , Obj : "Paper"},
                        {No : 14 , Obj : "Paper"},
                        {No : 15 , Obj : "Paper"},
                        {No : 16 , Obj : "Paper"},
                        {No : 17 , Obj : "Paper"},
                        {No : 18 , Obj : "Paper"},
                        {No : 19 , Obj : "Paper"},
                        {No : 20 , Obj : "Paper"},
                        {No : 21 , Obj : "Paper"},
                        {No : 22 , Obj : "Paper"},
                        {No : 23 , Obj : "Paper"},
                        {No : 24 , Obj : "Paper"},
                        {No : 25 , Obj : "Paper"},
                    ];

                   
                   
                    $scope.curPage = 1,
                    $scope.itemsPerPage = 5,
                    $scope.numPerPage = 4;
                    $scope.filteredItems = [];
                    this.items = employees;
                    
                    $scope.numOfPages = function () {
                        return Math.ceil(employees.length / $scope.itemsPerPage);
                          
                      };
                   
                 $scope.$watch('curPage + numPerPage', function() {
                        let begin = (($scope.curPage - 1) * $scope.itemsPerPage),
                        end = begin + $scope.itemsPerPage;
                          
                      $scope.filteredItems = employees.slice(begin, end);
                    });
                });