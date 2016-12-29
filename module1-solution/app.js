(function () {
'use strict';

angular.module('lunchCheckerApp', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope){

    $scope.list = "";
    $scope.countItems = function() {
        var listSplitting = makeArray($scope.list);
        listSplitting = listSplitting.filter(function(array) { return array.trim() != ''; });
        $scope.itemCount = listSplitting.length;
        $scope.message = "";
        if ($scope.itemCount === 0){
            $scope.message = "Please enter data";
        }

        if($scope.itemCount =< 3 && $scope.itemCount != 0){
            $scope.message = "Enjoy";
        }

        if($scope.itemCount > 3){
            $scope.message = "Too Much!";
        }


    };

    function makeArray(string) {
        return string.split(" ");
    }


   $scope.outputMessage = function(){

       
   } 


}

})();


