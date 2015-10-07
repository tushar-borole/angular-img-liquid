(function () {
    'use strict';

    angular
        .module('angular-img-liquid', [])
        .directive('imgliquid', imgliquid);

    imgliquid.$inject = ['$timeout'];

    /* @ngInject */
    function imgliquid($timeout) {
        // Usage:
        //
        // Creates:
        //
        var directive = {

            link: link
        };
        return directive;

        function link(scope, element, attrs, controller) {
            $timeout(function () {
                var imgLiquidOption = scope.$eval(attrs.imgliquidOption)

                $(element).imgLiquid(imgLiquidOption);
            },100)
        }
    }

})();