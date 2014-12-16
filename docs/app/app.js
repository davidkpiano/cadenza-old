

var app = angular.module('cadenza', ['ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
        var components = [
            'space',
            'grid',
            'panels',
            'typography',
            'layout',
            'themes',
            'buttons',
            'nav',
            'animations',
            'labels',
            'forms',
            'sandbox'
        ];

        _.each(components, function(component) {
            $stateProvider
                .state(component, {
                    url: '/' + component,
                    views: {
                        'content': {
                            templateUrl: 'build/' + component + '.html',
                            controller: 'ComponentController',
                            controllerAs: 'component'
                        }
                    }
                });
        });
    }]);

app.controller('ComponentController', [function() {
    this.util = {
        range: function(quantity) {
            return _.range(quantity);
        }
    };

    this.grid = {
        parentClass: ''
    };

    this.tooltips = {
        positions: [
            'above-left',
            'above-right',
            'above-center',
            'below-left',
            'below-right',
            'below-center',
            'left',
            'right'
        ],
        position: 'above-right'
    };

    this.range = function(quantity) {
        return _.range(quantity);
    };

    this.edm = false;

    this.play = function() {
        if (!this.edm) {
            this.edm = true;
            document.getElementById('video').playVideo();
        } else {
            this.edm = false;
            document.getElementById('video').pauseVideo();
        }
    }
}]);