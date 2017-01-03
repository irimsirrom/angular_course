(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtControlller)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems();

   showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

AlreadyBoughtControlller.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtControlller(ShoppingListCheckOffService) {
  var showBoughtList = this;

  showBoughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  
}

function ShoppingListCheckOffService() {
  var service = this;

  var items = [{
        name:"apple",
        quantity:"5"
        },
        {
        name:"bread",
        quantity:"1"   
        },
        {
        name:"eggs",
        quantity:"12"   
        },
        {
        name:"orange juice",
        quantity:"2"   
        },
        {
        name:"cookies",
        quantity:"10"   
        }];

    var boughtItems = [];

   service.removeItem = function (index) {
    boughtItems.push(items[index]);  
    items.splice(index, 1);
  };

  service.getItems = function () { 
    return items;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();