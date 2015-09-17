
var app= angular.module('myApp', ['ngAnimate','ngMaterial','ngRoute']);

app.controller('ArticleController1', ArticleController1);
app.controller('CartController1', CartController1);
app.controller('NavCtrl', NavCtrl)

app.factory('Article', Article);
app.factory('Cart', Cart);

app.config(routeConfig);
app.directive('price', priceDirective);

function NavCtrl ($timeout, $q, $log, Article) {
  var self = this;
  self.simulateQuery = false;
  self.isDisabled    = false;
  // list of `state` value/display objects
  self.states        = Article.getItems();
  self.querySearch   = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.searchTextChange   = searchTextChange;

  function querySearch (query) {
    var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
      deferred;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }
  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }
  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
  }

  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };
  }
}

function priceDirective() {
  return {
    restrict : 'E',
    scope : { value: '='},
    templateUrl : 'templates/price.html'
  }
}

function routeConfig($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'templates/articles.html'})
    .when('/about', {templateUrl: 'templates/about.html'})
    .when('/destroy', { template : '<h1>GameOver!</h1>' })
    .otherwise( { redirectTo : '/' });
}
  //.controller('ArticleController1', ['$scope',ArticleController1($scope)]);

function Cart() {
  var items = [],
      fn    = {};

  fn.addArticle = function (article) {
    items.push(article);
  };
  fn.getItems = function () {
    return items;
  };
  fn.sum = function () {
    return items.reduce(function (total, article) {
      return parseFloat(total) + parseFloat(article.price);
    }, 0);
  };
  return fn;

}

function Article($http) {
  var items = [],
    fn    = {};

  fn.getArticles = function (resolve) {
    $http.get('data/articles.json').then(function(response) {
      items.push(response);
      resolve(items);
    });
  }
  fn.getItems = function () {
    return items;
  };
  return fn;
}
function CartController1($scope, Cart) {
  $scope.cart = Cart;
}

function ArticleController1($scope, Cart, Article) {
  $scope.cart = Cart;
  Article.getArticles(function(data) {
    $scope.articles = data[0].data;
  });
};



//ArticleController1.prototype.addContact = function() {
//  //this.contacts.push({type: 'email', value: 'yourname@example.org'});
//};
//
//ArticleController1.prototype.removeContact = function(contactToRemove) {
//  //var index = this.contacts.indexOf(contactToRemove);
//  //this.contacts.splice(index, 1);
//};
//
//ArticleController1.prototype.clearContact = function(contact) {
//  //contact.type = 'phone';
//  //contact.value = '';
//};
