'use strict';

angular.module('app')
    .controller('NewReceiptController', ['$scope', '$state', 'newReceiptDataService', 'userService', 'ReceiptApi', 'notify', function ($scope, $state, newReceiptDataService, userService, ReceiptApi, notify) {

        function initialise(){
            $scope.receipt = newReceiptDataService.newReceipt();
            getReceiptsCategories();
        }

        angular.element(document).ready(function () {
            //$('#receiptCategory').material_select();
            //$(".dropdown-button").dropdown();
            //$('.materialboxed').materialbox();
            //$('select').material_select();
            //$('#receiptCategory').material_select();

        });

        function getReceiptsCategories(){
            ReceiptApi.all('receipts').all('categories').getList().then(function (res) {
                $scope.categories = res.plain();
                $('#receiptCategory').material_select();
                //$('select-option').material_select();
                //$('select').material_select();
            }, function () {
                notify({ message:'Receipt categories not found', duration:3000, classes:'alert-danger'} );
            });
        }

        $scope.submitReceipt = function(){
            var receipts = ReceiptApi.all('receipt');
            receipts.post($scope.receipt).then(function (res) {
                notify({ message:'Receipt Saved', duration:3000, classes:'alert-success'} );
                $state.go('dashboard');
            },function(response){
                notify({ message:'status: ' + response.status + '; message: ' + response.message, duration:3000, classes:'alert-success'} );
            });
        };

        initialise();
    }]);
