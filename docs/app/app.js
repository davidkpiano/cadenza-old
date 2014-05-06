

var app = angular.module('cadenza', ['ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
        var components = [
            'grid',
            'panels',
            'themes',
            'buttons'
        ];

        _.each(components, function(component) {
            $stateProvider
                .state(component, {
                    url: '/' + component,
                    templateUrl: 'views/' + component + '.html',
                    controller: 'ComponentController',
                    controllerAs: 'component'
                });
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