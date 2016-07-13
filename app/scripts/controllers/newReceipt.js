'use strict';

angular.module('app')
    .controller('NewReceiptController', ['$scope', '$state', 'newReceiptDataService', 'userService', 'ReceiptApi', 'notify', function ($scope, $state, newReceiptDataService, userService, ReceiptApi, notify) {

        var defaultDate = new Date();

        function initialise(){
            $scope.receipt = newReceiptDataService.newReceipt();
            //$scope.receipt.receiptDate = moment().format("DD MMM YYYY");
        }

        angular.element(document).ready(function () {
            $('#newReceiptCreateDate').pickadate({
                selectMonths: true, // Creates a dropdown to control month
                selectYears: 15, // Creates a dropdown of 15 years to control year
                format: 'dd mmm yyyy'
            });
        });

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
