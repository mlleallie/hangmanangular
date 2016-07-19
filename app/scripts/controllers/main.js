'use strict';

/**
 * @ngdoc function
 * @name hangmanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hangmanApp
 */
angular.module('hangmanApp')
  .controller('MainCtrl', ['$scope',
  	function ($scope) {

  	$scope.dictionary = ['pineapple', 'discombobulate', 'confused', 'remipede', 'manatee', 'pants']

  	}
  ])
  .directive('hangmanGame', function() {
  	return {
  		restrict: 'E',
  		templateUrl: 'views/hangman.tpl.html',
  		link: function(scope) {}

  	};
  });
