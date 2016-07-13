angular.module('app.firebase', [])

.factory("sampleItems", function($firebase) {
      var itemsRef = new Firebase("https://todomvc-angular.firebaseio.com/items");
      return $firebase(itemsRef);
});