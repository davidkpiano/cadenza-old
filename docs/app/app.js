

var app = angular.module('cadenza', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('grid', {
                url: '/grid',
                templateUrl: 'views/grid.html',
                controller: 'ComponentController',
                controllerAs: 'component'
            });
    }]);

app.controller('ComponentController', [function() {
    this.util = {
        range: function(quantity) {
            return _.range(quantity);
        }
    }

    this.grid = {
        parentClass: ''
    }
}]);