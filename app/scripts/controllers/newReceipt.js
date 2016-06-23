'use strict';

angular.module('app')
    .controller('NewReceiptController', ['$scope', '$state', 'newReceiptDataService', 'userService', 'ReceiptApi', 'notify', function ($scope, $state, newReceiptDataService, userService, ReceiptApi, notify) {

        var defaultDate = new Date();

        function initialise(){
            $scope.receipt = newReceiptDataService.newReceipt();
            $scope.receipt.date = defaultDate.toDateString();
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

        /*
        $scope.receiptFileChangeEventHandler = function(files){
            var file = files[0];
            var reader = new FileReader();
            reader.onload = function(event) {
                $scope.receipt.file = event.target.result;
                var user = userService.getCurrentUser();
                $scope.receipt.user = user.username;
                $scope.receipt.organisation = user.organisation;
                $scope.$apply();
                $state.go('newNotes');
            };
            reader.readAsDataURL(file);
        };
*/
        initialise();
    }]);
