var myApp = angular.module("myApp",[]); // 定义模块的语法

var myController = function($rootScope,$scope){
    var info = [
       {
          name:"fang",
          email:"marry@sohu.com", 
          Salary:18950, 
          birthday:new Date("1998-8-30")
       },
       {
          name:"sara",
          email:"amyKitty@sohu.com",
          Salary:15023,
          birthday:new Date("2000-10-12")
       },
       {
          name:"Jack",
          email:"amJack@sohu.com",
          Salary:20000,
          birthday:new Date("1996-5-12")
       },
       {
          name:"Amy",
          email:"markLili@sohu.com",
          Salary:13000,
          birthday:new Date("2000-10-12")
       }
    ]
    $scope.info = info;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;
    
    $scope.setSortColumn = function(column){
       if($scope.sortColumn == column){
           $scope.reverseSort = !$scope.reverseSort;
       }
       $scope.sortColumn = column;
    }

    $scope.getSortClass = function(column){
        if($scope.sortColumn == column){
           return $scope.reverseSort?'allow-down':'allow-up';
        }
    }
}

myApp.controller("myController",myController);
