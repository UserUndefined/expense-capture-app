'use strict';

angular.module('app')
    .directive('activeSideNav', function($mdSidenav, $mdMedia) {
        return {
            closeSideNav: function() {
                $mdSidenav('left').close()
                    .then(function () {
                        $log.debug("close LEFT is done");
                    });
            },
            lockSideNavBar: function() {
                return $mdMedia('gt-md');
            }
        }});

