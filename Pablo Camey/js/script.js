var BryanPaz = angular.module('BryanPaz', []);
BryanPaz.controller("Suma", function($scope){
  
 $scope.cantidad1= 1;
 $scope.cantidad2= 2;
 $scope.total= 0;


  $scope.total = $scope.cantidad1 + $scope.cantidad2

  })
BryanPaz.controller("Multiplicacion", function($scope){
  
 $scope.cantidad1= 3;
 $scope.cantidad2= 4;
 $scope.total= 0;


  $scope.total = $scope.cantidad1 * $scope.cantidad2

  });