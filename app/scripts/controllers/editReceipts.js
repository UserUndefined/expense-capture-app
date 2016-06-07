'use strict';

angular.module('app')
    .controller('EditReceiptsController', ['$scope', '$state', 'ReceiptApi', 'newReceiptDataService', 'notify', 'transcriptParser', function ($scope, $state, ReceiptApi, newReceiptDataService, notify, transcriptParser) {

        //$scope.$on('onRepeatLast', function(scope, element, attrs) {
        //    $('.materialboxed').materialbox();
        //});

        function initialise(){
            ReceiptApi.all('receipts').getList().then(function (res) {
                $scope.receipts = res.plain();
            }, function () {
                notify({ message:'Fetch Receipts Failed', duration:3000, classes:'alert-fail'} );
            });
        }

        initialise();
    }]);
