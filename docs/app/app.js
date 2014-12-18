

angular.module('cadenza', ['ui.router', 'ngAnimate'])
    .constant('components', [
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
        'form',
        'sandbox'
    ])

    .config(['components', '$stateProvider', '$urlRouterProvider', 
    function(components, $stateProvider, $urlRouterProvider) {
        _.each(components, function(component) {
            $stateProvider
                .state(component, {
                    url: '/' + component,
                    views: {
                        'content': {
                            templateUrl: 'build/' + component + '.html',
                            controller: 'CadenzaController',
                            controllerAs: 'cadenza'
                        }
                    }
                });
        });
    }])

    .controller('CadenzaController', ['components', '$rootScope',
    function(components, $rootScope) {
        this.util = {
            range: function(quantity) {
                return _.range(quantity);
            }
        };

        $rootScope.components = components;

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

        this.range = _.range;
    }]);
