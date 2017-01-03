(function () {
'use strict';

angular.module('PhoneBookApp', [])
.controller('PhoneBookCardController', PhoneBookCardController)
.service('PhoneBookService', PhoneBookService)
.constant('ApiBasePath', "https://api.myjson.com");

PhoneBookCardController.$inject = ['PhoneBookService'];
function PhoneBookCardController(PhoneBookService){
  var phoneCard = this;

  var promise = PhoneBookService.getData();

  promise.then(function (response) {
    phoneCard.listings = response.data;
  })
  .catch(function (error) {
    console.log("Data didn't come");
  });


}


PhoneBookService.$inject = ['$http', 'ApiBasePath'];
function PhoneBookService($http, ApiBasePath){
  var service = this;

  service.getData = function(){
    var response = $http({
      method:"GET",
      url:(ApiBasePath + "/bins/ism9j")

    });
    return response;
  };

}


})();
