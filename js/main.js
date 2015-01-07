/*jslint browser: true*/
/*global $, jQuery, alert, console, angular*/

angular.module('cartApp', [])
	.controller('CartController', ['$scope', function ($scope) {
		$scope.items = [
			{title: 'Product A', price: '39.99', image: 'https://cottonbureau.com/img/products/2941_gh8H_1000.jpg', isInCart: false},
			{title: 'Product B', price: '39.99', image: 'http://1.bp.blogspot.com/-E5gHm-DIPao/UdA4mtJOf_I/AAAAAAAAJgg/E3XWXsDXzxY/s1600/Mark_Canesco_Ampersand_2400.jpg', isInCart: false}
		];
			
		$scope.cart = {
			items: [],
			total: 123,
			active: false
		};
 
		$scope.addToCart = function (i) {
			console.log(i);
			if (!i.isInCart) {
				$scope.cart.items.push({title: i.title, price: i.price});
				i.isInCart = true;
			}
		};
		
		$scope.toggleCart = function () {
			if ($scope.cart.active) {
				$scope.cart.active = false;
			} else {
				$scope.cart.active = true;
			}
		};
	}]);