"use strict";
 angular.module('config', [])

.constant('RECEIPT_API_URL', 'https://generic-receiver-api.herokuapp.com/')

;;angular.module('appTemplates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("views/captureReceipt.html",
    "<div class=container><div class=row></div><div class=row><div class=\"file-field input-field col s12\"><div class=\"waves-effect waves-light btn\"><span>Capture Receipt</span> <input type=file accept=image/* capture=camera id=receiptFile onchange=angular.element(this).scope().receiptFileChangeEventHandler(this.files)></div></div></div><div class=row ng-if=\"receiptFile !== ''\"><div class=\"col s5\"><img class=receiptPreview ng-src=\"{{receiptFile}}\"></div></div><div class=row><div class=\"input-field col s12\"><button class=\"waves-effect waves-light btn\" ng-click=startDictation()>Dictate Notes</button></div></div><div class=row><div class=\"input-field col s12\"><textarea class=\"materialize-textarea validate\" type=text id=transcript ng-model=transcript></textarea><label class=active for=transcript>Notes</label></div></div><div class=row><div class=\"input-field col s6\"><input id=receiptDate class=validate ng-model=createdDate><label class=active for=receiptDate>Receipt Date</label></div><div class=\"input-field col s6\"><input id=receiptValue class=validate ng-model=claimValue><label class=active for=receiptValue>Claim Value</label></div></div><div class=row><div class=\"input-field col s12\"><input class=validate id=projectName ng-model=project><label class=active for=projectName>Project</label></div></div><div class=row><div class=\"input-field col s6\"><button class=\"waves-effect waves-light btn\" ng-click=submitReceipt() ng-if=!receiptInvalid>Save Receipt</button> <button class=\"disabled btn\" ng-click=submitReceipt() ng-if=receiptInvalid>Save Receipt</button></div></div><div ng-if=receiptSubmitted class=row><div class=\"col s12\"><div class=\"input-field col s12\"><p>Receipt Submitted</p></div></div></div></div>");
  $templateCache.put("views/directiveExamples.html",
    "<h1>AngularJs Custom Directive Examples</h1><p>This page contains a few examples of custom AngularJs directives using different techniques and functionality.</p><p>Here is an inline custom directive displaying a customer name scope property</p><exp-in-line-directive></exp-in-line-directive><p>Here is a custom directive using an HTML template to display all customer details:</p><exp-html-directive></exp-html-directive>");
  $templateCache.put("views/directives/currentUser.html",
    "<i class=material-icons>perm_identity</i>");
  $templateCache.put("views/directives/directiveExampleHtmlTemplate.html",
    "<hr><p><h3>Customer Name:</h3>{{customer.name}}</p><p><h3>Customer Telephone:</h3>{{customer.telephone}}</p><p><h3>Customer Email:</h3>{{customer.email}}</p><hr>");
  $templateCache.put("views/editNotes.html",
    "<div class=\"container col s12 m6 l6 offset-m3 offset-l3\"><div class=row></div><div class=row><div class=\"input-field col s9\"><textarea class=\"materialize-textarea validate\" type=text id=transcript ng-model=receipt.transcript ng-change=parseTranscript() ng-model-options=\"{ debounce: 2000 }\" focus=isTranscriptFocused></textarea><label class=active for=transcript>Notes</label></div><div class=\"input-field col s3\"><img class=\"receiptPreview col s12\" ng-src=\"{{receipt.file}}\"></div></div><div class=row><div class=\"input-field col s6\"><input id=receiptDate class=validate ng-model=receipt.date><label class=active for=receiptDate>Receipt Date</label></div><div class=\"input-field col s6\"><input id=receiptValue class=validate ng-model=receipt.price><label class=active for=receiptValue>Claim Value</label></div></div><div class=row><div class=\"input-field col s12\"><input class=validate id=projectName ng-model=receipt.project><label class=active for=projectName>Project</label></div></div><div class=row><div class=input-field><button class=\"waves-effect waves-light btn col s12\" ng-click=submitReceipt() ng-if=!receiptInvalid>Save Receipt</button> <button class=\"disabled btn col s12\" ng-click=submitReceipt() ng-if=receiptInvalid>Save Receipt</button></div></div><div ng-if=receiptSubmitted class=row><div class=\"input-field col s12\"><a ng-click=navigateToNewReceipt()>New receipt</a></div></div><span us-spinner=\"{radius:20, width:8, length:16}\" spinner-on=showSpinner></span></div>");
  $templateCache.put("views/editReceipts.html",
    "<div class=\"container col s12 m12 l12\"><div class=row></div><table class=highlight><thead><tr><th data-field=list-receipt-file></th><th data-field=list-receipt-date>Date</th><th data-field=list-receipt-project>Project</th><th data-field=list-receipt-price>Price</th></tr></thead><tbody><tr ng-repeat=\"receipt in receipts\"><td><img ng-src={{receipt.file}} class=\"img-list-receipts-thumbnail responsive-img materialboxed\" height=50></td><td>{{receipt.date}}</td><td>{{receipt.project}}</td><td>{{receipt.price}}</td></tr></tbody></table></div>");
  $templateCache.put("views/formValidation.html",
    "<h1>AngularJs Form Validation Example</h1><form novalidate class=simple-form>Name: <input ng-model=user.name required><br>E-mail: <input type=email ng-model=user.email class=validate required><br><input type=button ng-click=reset() value=\"Reset\"> <input type=submit ng-click=update(user) value=\"Save\"></form><pre>user = {{user | json}}</pre><pre>master = {{master | json}}</pre>");
  $templateCache.put("views/login.html",
    "<div class=\"container col s12 m6 l6 offset-m3 offset-l3\"><form class=login-form name=loginForm><div class=row><div class=input-field><h5 class=center>Expenses Tracker Login</h5></div></div><div class=row><div class=\"input-field col s12\"><input class=validate id=logon_organisation ng-model=user.organisation><label class=active for=logon_organisation data-error=wrong data-success=right>Organisation</label></div></div><div class=row><div class=\"input-field col s12\"><input class=validate id=logon_logon ng-model=user.logon><label class=active for=logon_logon data-error=wrong data-success=right>Logon</label></div></div><div class=row><div class=\"input-field col s12\"><input id=logon_password type=password ng-model=user.password><label class=active for=logon_password>Password</label></div></div><div class=row><div class=\"input-field col s12 m12 l12 login-text\"><input type=checkbox id=remember-me ng-model=\"user.rememberMe\"><label for=remember-me>Remember me</label></div></div><div class=row><div class=\"input-field col s12\"><a class=\"btn waves-effect waves-light col s12\" ng-click=submitLogon()>Login</a></div></div></form></div>");
  $templateCache.put("views/main.html",
    "<div class=container><div class=row></div><div class=row><div class=\"col s12\"><div class=\"input-field col s6\"><span>Camera:</span> <input id=image_filepath type=file class=validate accept=image/* capture=camera></div></div></div><div class=row><div class=\"col s12\"><div class=\"input-field col s6\"><span>Microphone #1:</span> <input type=file accept=\"audio/*;capture=microphone\"></div></div></div><div class=row><div class=\"col s12\"><div class=\"input-field col s6\"><span>Microphone #2:</span> <input id=audio_filepath type=file class=validate accept=audio/* capture=microphone></div></div></div><div class=row><div class=\"col s12\"><div class=\"input-field col s6\"><span>Video:</span> <input id=video_filepath type=file class=validate accept=audio/* capture=video></div></div></div><div class=row><div class=\"col s12\"><div class=\"input-field col s6\"><span>Webkit Speech:</span> <input x-webkit-speech></div></div></div><div class=row><div class=\"col s12\"><div class=\"input-field col s12\"><div class=speech><span><input name=q id=transcript placeholder=\"Speak\"> <button class=\"waves-effect waves-light btn\" onclick=startDictation()>Start Recording</button></span></div></div></div></div></div>");
  $templateCache.put("views/newNotes.html",
    "<div class=\"container col s12 m6 l6 offset-m3 offset-l3\"><div class=row></div><div class=row><div class=input-field><button class=\"waves-effect waves-light btn col s12\" ng-click=toggleDictation()><i class=\"material-icons col s1\">mic</i><div class=\"col s10\"><span ng-if=!recording>Start Dictating</span> <span ng-if=recording>Stop Dictating</span></div></button></div></div><div class=row><div><img id=image-test class=\"receiptPreview col s12\" ng-src={{receipt.file}} onload=\"Materialize.fadeInImage('#image-test')\"></div></div></div>");
  $templateCache.put("views/newReceipt.html",
    "<div class=\"container col s12 m6 l6 offset-m3 offset-l3\"><div class=row></div><div class=row><div class=\"file-field input-field\"><div class=\"waves-effect waves-light btn col s12\"><i class=\"material-icons col s1\">videocam</i><div class=\"col s10\"><span>Capture Receipt</span></div><input type=file accept=image/* capture=camera id=receiptFile onchange=angular.element(this).scope().receiptFileChangeEventHandler(this.files)></div></div></div></div>");
}]);
;angular.module('app', ['appTemplates', 'ui.router', 'config', 'restangular', 'angularSpinner', 'cgNotify', 'ipCookie'])

    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeError', function () {
            $state.transitionTo('login');
        });
    }])

    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            var mainView = {
                    url: '/main',
                    templateUrl: 'views/main.html',
                    controller: 'MainController'
                    },
                captureReceiptView = {
                    url: '/capture',
                    templateUrl: 'views/captureReceipt.html',
                    controller: 'CaptureReceiptController'
                },
                newReceiptView = {
                    url: '/new',
                    templateUrl: 'views/newReceipt.html',
                    controller: 'NewReceiptController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                },
                editReceiptsView = {
                    url: '/list',
                    templateUrl: 'views/editReceipts.html',
                    controller: 'EditReceiptsController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                },
                newNotesView = {
                    url: '/new',
                    templateUrl: 'views/newNotes.html',
                    controller: 'NewNotesController'
                },
                editNotesView = {
                    url: '/new',
                    templateUrl: 'views/editNotes.html',
                    controller: 'EditNotesController'
                },
                loginView = {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    controller: 'LoginController'
                },
                directivesExamplesView = {
                    url: '/directives',
                    templateUrl: 'views/directiveExamples.html',
                    controller: 'directiveExamplesController'
                },
                formValidationExampleView = {
                    url: '/forms',
                    templateUrl: 'views/formValidation.html',
                    controller: 'formValidationExampleController'
                };

            $stateProvider

            .state('main', mainView)
            .state('captureReceipt', captureReceiptView)
            .state('newReceipt', newReceiptView)
            .state('newNotes', newNotesView)
            .state('editNotes', editNotesView)
            .state('editReceipts', editReceiptsView)
            .state('login', loginView)
            .state('directivesExamples', directivesExamplesView)
            .state('formValidationExample', formValidationExampleView);

            $urlRouterProvider.otherwise('/new');

        }]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
    $(".button-collapse").sideNav();
    $('select').material_select();
    $(".dropdown-button").dropdown();
    $('.materialboxed').materialbox();
});
;'use strict';

angular.module('app')
    .controller('CaptureReceiptController', ['$scope', 'ReceiptApi', 'transcriptParser', function ($scope, ReceiptApi, transcriptParser) {

        function initialise(){
            $scope.transcript = '';
            $scope.receiptFile = '';
            $scope.createdDate = '';
            $scope.project = '';
            $scope.claimValue = '';
            $scope.receiptSubmitted = false;
            $scope.receiptInvalid = true;
        }

        $scope.submitReceipt = function(){
            console.info($scope.transcript);
            console.info($scope.receiptFile);
            var payload = {};
            payload.transcript = $scope.transcript;
            payload.receiptFile = $scope.receiptFile;
            ReceiptApi.all('receiver').post(payload).then(function(){
                console.log('it worked!');
                $scope.receiptSubmitted = true;
            })
        };

        $scope.startDictation = function() {

            $scope.receiptSubmitted = false;

            if (window.hasOwnProperty('webkitSpeechRecognition')) {

                var recognition = new webkitSpeechRecognition();

                recognition.continuous = false;
                recognition.interimResults = false;

                recognition.lang = "en-US";
                recognition.start();

                recognition.onresult = function(e) {
                    document.getElementById('transcript').value
                        = e.results[0][0].transcript;
                    $scope.transcript = e.results[0][0].transcript;
                    $scope.project = transcriptParser.parseProject(e.results[0][0].transcript);
                    $scope.$apply();
                    recognition.stop();
                    //document.getElementById('labnol').submit();
                };

                recognition.onerror = function(e) {
                    recognition.stop();
                }
                recognition.onstart = function(event){
                    //console.log('Dictation started');
                }

                recognition.onend = function(){
                    //console.log('Dictation ended');
                }
            }
        };

        $scope.receiptFileChangeEventHandler = function(files){
            console.log('event handles');
            var file = files[0];
            var reader = new FileReader();
            reader.onload = function(event) {
                $scope.receiptFile = event.target.result;
                $scope.receiptInvalid = false;
                $scope.$apply();
            };
            reader.readAsDataURL(file);
        };

        initialise();
    }]);
;'use strict';

angular.module('app')
    .controller('directiveExamplesController', ['$scope', function($scope){

        function initialise(){
            $scope.customer = {name: 'A A Taxis', id: 12345, telephone: '0208 555 555', email: 'info@taxis.com'};
        }

        initialise();
    }]);;'use strict';

angular.module('app')
    .controller('EditNotesController', ['$scope', '$state', 'ReceiptApi', 'newReceiptDataService', 'notify', 'transcriptParser', function ($scope, $state, ReceiptApi, newReceiptDataService, notify, transcriptParser) {

        function initialise(){
            $scope.receipt = newReceiptDataService.getReceipt();
            $scope.showSpinner = false;
            $scope.receiptSubmitted = false;
            $scope.isTranscriptFocused = !$scope.receipt.canDictate;
            $scope.parseTranscript();
        }

        $scope.parseTranscript = function(){
            if ($scope.receipt.project === ''){
                $scope.receipt.project = transcriptParser.parseProject($scope.receipt.transcript);
            }
            if ($scope.receipt.price === ''){
                $scope.receipt.price = transcriptParser.parsePrice($scope.receipt.transcript);
            }
        }

        $scope.submitReceipt = function(){
            $scope.showSpinner = true;
            var payload = {};
            payload.project = $scope.receipt.project;
            payload.price = $scope.receipt.price;
            payload.date = $scope.receipt.date;
            payload.transcript = $scope.receipt.transcript;
            payload.file = $scope.receipt.file;
            payload.user = $scope.receipt.user;
            payload.organisation = $scope.receipt.organisation;
            ReceiptApi.all('receiver').post(payload).then(function(){
                $scope.receiptSubmitted = true;
                $scope.showSpinner = false;
                notify({ message:'Receipt Saved', duration:3000, classes:'alert-success'} );
            },function(){
                $scope.showSpinner = false;
            })
        };

        $scope.navigateToNewReceipt = function(){
            $state.go('newReceipt');
        };

        initialise();
    }]);
;'use strict';

angular.module('app')
    .controller('EditReceiptsController', ['$scope', '$state', 'ReceiptApi', 'newReceiptDataService', 'notify', 'transcriptParser', function ($scope, $state, ReceiptApi, newReceiptDataService, notify, transcriptParser) {

        function initialise(){
/*
            $scope.receipts = [];
            $scope.receipts.push({
                file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAY1BMVEX////4zAD4ywD//vz62mD4yQD++eb//fX//vr50zb98MH//PD86KL86KX//vj++OD51ET63XX744f866750Cj4zhX622n63HD977j+9tr75JL74oL+9dX511b988/98cb755oPQMZTAAADwUlEQVRYha1Z7ZKCMAy0gaIICCogyqG+/1MeFAVp0yZ87K+bm81OaJM0ibsdjpPl/wgOBz53t4vKM58cZwGffMwBnlxykEN+5ZLfAAJ8LvvRkqFmHYrXSNECKp5yUCh2FjGoGYiezLud84de/FHMe9hTWzLrANPiS8+J20kHZQGCI+2P/MKpHeUDUwjJcPsuRz4UjiA8hT/KLZW8Gq+ZGAirtlf+Elvqm5J+aQbN3kJ8SDGF6ws7nJqptABLEh81Xsu8uKUr3RdLWE2u8Ou2M1j3oelMkSJE/eMUs3RJx5hFZvKOxscppsPtfYFIIyEbmR+npB1V6oFamHePfZxywppiEW5g3H1g4bVnZ3tvLugJdt7cpzyL0/bimtoMtOBOczsxwzPsZnVGTALQciO9doIpP+0GAuqRd0DD6EsMMbd9h4UQY127OnnwMJXNojCxiJkuCGkGCZ4Fg/SQktbI+0obVQpP3R/tb/xdCaLQS/whc3/mcPUecR6t21oZTihfoPH680CqqU6dVClLvfnFp5A8yfPQqpTxGpmQR8W0J/nI/G2OPJ/hS3+E2BugKdfer9eeK3k/0g3v5GSfM8H1/Uj6qIpJv/PusO0lbOrBre2MAYpG3WhJ+t358KJiVDnwEh8ayC5msTd6atXdo+19GUjdcfyJkaW0Sas3I0DySHcSXvQNqWesJjhdvzANCXX4jqdAcWqaIyvzZLvkJCoU3OjLhvY1euqtXUwGlsrfBpzoqkGCdI1B4bbrClTtO3GLzHDoSn10c9t1CewRQCJNfS3DjoFKl0Zey4UICk2aOVNyMI0iCGcsByhMo0/GtAUfv9Xg+/BthEMpx+OYsaNg4fHNhbNtgFuOIPazzL+QU/4iePv9rF0QV3X8e2P9JByy5JVtl4s7VbAl+PH1mpzbP9CxcynUK9MHiJh2/Wuhd4XFnbZhQn8++es0CpHxDMqt3DYf5q3KyJ8uLPpWZD30tdHH7S1KNt7Zf3rzVfDwkQgfVOehwoSFbb6e5bStbYR8rdv2mVK+1ymfXIsBxl7Zgbdr5UBsAd1wT6uriqt7YrCtOVlOFy5l0Y9Zy0AMDCuKK1aXNCytUvSEDeEy5Ts95Qu5zG3aadfy0gVqv/TRZv9GNcJY1lukFxRXc1mPY34ff6KWYoPb+dwqRS9qBu25vVQNXK+l8/cEDM+GIw6Qvea3JIdjKKkaIvNq4TP28sHuejfir+kYgqQppCkPIEUTr22zD2lVZtqCosjKKt1m7Dilz+RSl90uoqwv8TPdfr6bh39XMiwETnKU3AAAAABJRU5ErkJggg==',
                transcript: '',
                project: 'Project A',
                price: '£1.00',
                date: '12-May-2016',
                user: 'Guest',
                organisation: 'ABC Construction',
                canDictate: true
            });
            $scope.receipts.push({
                file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAY1BMVEX////4zAD4ywD//vz62mD4yQD++eb//fX//vr50zb98MH//PD86KL86KX//vj++OD51ET63XX744f866750Cj4zhX622n63HD977j+9tr75JL74oL+9dX511b988/98cb755oPQMZTAAADwUlEQVRYha1Z7ZKCMAy0gaIICCogyqG+/1MeFAVp0yZ87K+bm81OaJM0ibsdjpPl/wgOBz53t4vKM58cZwGffMwBnlxykEN+5ZLfAAJ8LvvRkqFmHYrXSNECKp5yUCh2FjGoGYiezLud84de/FHMe9hTWzLrANPiS8+J20kHZQGCI+2P/MKpHeUDUwjJcPsuRz4UjiA8hT/KLZW8Gq+ZGAirtlf+Elvqm5J+aQbN3kJ8SDGF6ws7nJqptABLEh81Xsu8uKUr3RdLWE2u8Ou2M1j3oelMkSJE/eMUs3RJx5hFZvKOxscppsPtfYFIIyEbmR+npB1V6oFamHePfZxywppiEW5g3H1g4bVnZ3tvLugJdt7cpzyL0/bimtoMtOBOczsxwzPsZnVGTALQciO9doIpP+0GAuqRd0DD6EsMMbd9h4UQY127OnnwMJXNojCxiJkuCGkGCZ4Fg/SQktbI+0obVQpP3R/tb/xdCaLQS/whc3/mcPUecR6t21oZTihfoPH680CqqU6dVClLvfnFp5A8yfPQqpTxGpmQR8W0J/nI/G2OPJ/hS3+E2BugKdfer9eeK3k/0g3v5GSfM8H1/Uj6qIpJv/PusO0lbOrBre2MAYpG3WhJ+t358KJiVDnwEh8ayC5msTd6atXdo+19GUjdcfyJkaW0Sas3I0DySHcSXvQNqWesJjhdvzANCXX4jqdAcWqaIyvzZLvkJCoU3OjLhvY1euqtXUwGlsrfBpzoqkGCdI1B4bbrClTtO3GLzHDoSn10c9t1CewRQCJNfS3DjoFKl0Zey4UICk2aOVNyMI0iCGcsByhMo0/GtAUfv9Xg+/BthEMpx+OYsaNg4fHNhbNtgFuOIPazzL+QU/4iePv9rF0QV3X8e2P9JByy5JVtl4s7VbAl+PH1mpzbP9CxcynUK9MHiJh2/Wuhd4XFnbZhQn8++es0CpHxDMqt3DYf5q3KyJ8uLPpWZD30tdHH7S1KNt7Zf3rzVfDwkQgfVOehwoSFbb6e5bStbYR8rdv2mVK+1ymfXIsBxl7Zgbdr5UBsAd1wT6uriqt7YrCtOVlOFy5l0Y9Zy0AMDCuKK1aXNCytUvSEDeEy5Ts95Qu5zG3aadfy0gVqv/TRZv9GNcJY1lukFxRXc1mPY34ff6KWYoPb+dwqRS9qBu25vVQNXK+l8/cEDM+GIw6Qvea3JIdjKKkaIvNq4TP28sHuejfir+kYgqQppCkPIEUTr22zD2lVZtqCosjKKt1m7Dilz+RSl90uoqwv8TPdfr6bh39XMiwETnKU3AAAAABJRU5ErkJggg==',
                transcript: '',
                project: 'Project B',
                price: '343.56',
                date: '09-May-2016',
                user: 'Guest',
                organisation: 'ABC Construction',
                canDictate: true
            });
            $scope.receipts.push({
                file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAY1BMVEX////4zAD4ywD//vz62mD4yQD++eb//fX//vr50zb98MH//PD86KL86KX//vj++OD51ET63XX744f866750Cj4zhX622n63HD977j+9tr75JL74oL+9dX511b988/98cb755oPQMZTAAADwUlEQVRYha1Z7ZKCMAy0gaIICCogyqG+/1MeFAVp0yZ87K+bm81OaJM0ibsdjpPl/wgOBz53t4vKM58cZwGffMwBnlxykEN+5ZLfAAJ8LvvRkqFmHYrXSNECKp5yUCh2FjGoGYiezLud84de/FHMe9hTWzLrANPiS8+J20kHZQGCI+2P/MKpHeUDUwjJcPsuRz4UjiA8hT/KLZW8Gq+ZGAirtlf+Elvqm5J+aQbN3kJ8SDGF6ws7nJqptABLEh81Xsu8uKUr3RdLWE2u8Ou2M1j3oelMkSJE/eMUs3RJx5hFZvKOxscppsPtfYFIIyEbmR+npB1V6oFamHePfZxywppiEW5g3H1g4bVnZ3tvLugJdt7cpzyL0/bimtoMtOBOczsxwzPsZnVGTALQciO9doIpP+0GAuqRd0DD6EsMMbd9h4UQY127OnnwMJXNojCxiJkuCGkGCZ4Fg/SQktbI+0obVQpP3R/tb/xdCaLQS/whc3/mcPUecR6t21oZTihfoPH680CqqU6dVClLvfnFp5A8yfPQqpTxGpmQR8W0J/nI/G2OPJ/hS3+E2BugKdfer9eeK3k/0g3v5GSfM8H1/Uj6qIpJv/PusO0lbOrBre2MAYpG3WhJ+t358KJiVDnwEh8ayC5msTd6atXdo+19GUjdcfyJkaW0Sas3I0DySHcSXvQNqWesJjhdvzANCXX4jqdAcWqaIyvzZLvkJCoU3OjLhvY1euqtXUwGlsrfBpzoqkGCdI1B4bbrClTtO3GLzHDoSn10c9t1CewRQCJNfS3DjoFKl0Zey4UICk2aOVNyMI0iCGcsByhMo0/GtAUfv9Xg+/BthEMpx+OYsaNg4fHNhbNtgFuOIPazzL+QU/4iePv9rF0QV3X8e2P9JByy5JVtl4s7VbAl+PH1mpzbP9CxcynUK9MHiJh2/Wuhd4XFnbZhQn8++es0CpHxDMqt3DYf5q3KyJ8uLPpWZD30tdHH7S1KNt7Zf3rzVfDwkQgfVOehwoSFbb6e5bStbYR8rdv2mVK+1ymfXIsBxl7Zgbdr5UBsAd1wT6uriqt7YrCtOVlOFy5l0Y9Zy0AMDCuKK1aXNCytUvSEDeEy5Ts95Qu5zG3aadfy0gVqv/TRZv9GNcJY1lukFxRXc1mPY34ff6KWYoPb+dwqRS9qBu25vVQNXK+l8/cEDM+GIw6Qvea3JIdjKKkaIvNq4TP28sHuejfir+kYgqQppCkPIEUTr22zD2lVZtqCosjKKt1m7Dilz+RSl90uoqwv8TPdfr6bh39XMiwETnKU3AAAAABJRU5ErkJggg==',
                transcript: '',
                project: 'Project B',
                price: '£12.34',
                date: '01-May-2016',
                user: 'Guest',
                organisation: 'ABC Construction',
                canDictate: true
            });
            $scope.receipts.push({
                file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAY1BMVEX////4zAD4ywD//vz62mD4yQD++eb//fX//vr50zb98MH//PD86KL86KX//vj++OD51ET63XX744f866750Cj4zhX622n63HD977j+9tr75JL74oL+9dX511b988/98cb755oPQMZTAAADwUlEQVRYha1Z7ZKCMAy0gaIICCogyqG+/1MeFAVp0yZ87K+bm81OaJM0ibsdjpPl/wgOBz53t4vKM58cZwGffMwBnlxykEN+5ZLfAAJ8LvvRkqFmHYrXSNECKp5yUCh2FjGoGYiezLud84de/FHMe9hTWzLrANPiS8+J20kHZQGCI+2P/MKpHeUDUwjJcPsuRz4UjiA8hT/KLZW8Gq+ZGAirtlf+Elvqm5J+aQbN3kJ8SDGF6ws7nJqptABLEh81Xsu8uKUr3RdLWE2u8Ou2M1j3oelMkSJE/eMUs3RJx5hFZvKOxscppsPtfYFIIyEbmR+npB1V6oFamHePfZxywppiEW5g3H1g4bVnZ3tvLugJdt7cpzyL0/bimtoMtOBOczsxwzPsZnVGTALQciO9doIpP+0GAuqRd0DD6EsMMbd9h4UQY127OnnwMJXNojCxiJkuCGkGCZ4Fg/SQktbI+0obVQpP3R/tb/xdCaLQS/whc3/mcPUecR6t21oZTihfoPH680CqqU6dVClLvfnFp5A8yfPQqpTxGpmQR8W0J/nI/G2OPJ/hS3+E2BugKdfer9eeK3k/0g3v5GSfM8H1/Uj6qIpJv/PusO0lbOrBre2MAYpG3WhJ+t358KJiVDnwEh8ayC5msTd6atXdo+19GUjdcfyJkaW0Sas3I0DySHcSXvQNqWesJjhdvzANCXX4jqdAcWqaIyvzZLvkJCoU3OjLhvY1euqtXUwGlsrfBpzoqkGCdI1B4bbrClTtO3GLzHDoSn10c9t1CewRQCJNfS3DjoFKl0Zey4UICk2aOVNyMI0iCGcsByhMo0/GtAUfv9Xg+/BthEMpx+OYsaNg4fHNhbNtgFuOIPazzL+QU/4iePv9rF0QV3X8e2P9JByy5JVtl4s7VbAl+PH1mpzbP9CxcynUK9MHiJh2/Wuhd4XFnbZhQn8++es0CpHxDMqt3DYf5q3KyJ8uLPpWZD30tdHH7S1KNt7Zf3rzVfDwkQgfVOehwoSFbb6e5bStbYR8rdv2mVK+1ymfXIsBxl7Zgbdr5UBsAd1wT6uriqt7YrCtOVlOFy5l0Y9Zy0AMDCuKK1aXNCytUvSEDeEy5Ts95Qu5zG3aadfy0gVqv/TRZv9GNcJY1lukFxRXc1mPY34ff6KWYoPb+dwqRS9qBu25vVQNXK+l8/cEDM+GIw6Qvea3JIdjKKkaIvNq4TP28sHuejfir+kYgqQppCkPIEUTr22zD2lVZtqCosjKKt1m7Dilz+RSl90uoqwv8TPdfr6bh39XMiwETnKU3AAAAABJRU5ErkJggg==',
                transcript: '',
                project: 'Project C',
                price: '£108.00',
                date: '24-Apr-2016',
                user: 'Guest',
                organisation: 'ABC Construction',
                canDictate: true
            });
            $scope.receipts.push({
                file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAY1BMVEX////4zAD4ywD//vz62mD4yQD++eb//fX//vr50zb98MH//PD86KL86KX//vj++OD51ET63XX744f866750Cj4zhX622n63HD977j+9tr75JL74oL+9dX511b988/98cb755oPQMZTAAADwUlEQVRYha1Z7ZKCMAy0gaIICCogyqG+/1MeFAVp0yZ87K+bm81OaJM0ibsdjpPl/wgOBz53t4vKM58cZwGffMwBnlxykEN+5ZLfAAJ8LvvRkqFmHYrXSNECKp5yUCh2FjGoGYiezLud84de/FHMe9hTWzLrANPiS8+J20kHZQGCI+2P/MKpHeUDUwjJcPsuRz4UjiA8hT/KLZW8Gq+ZGAirtlf+Elvqm5J+aQbN3kJ8SDGF6ws7nJqptABLEh81Xsu8uKUr3RdLWE2u8Ou2M1j3oelMkSJE/eMUs3RJx5hFZvKOxscppsPtfYFIIyEbmR+npB1V6oFamHePfZxywppiEW5g3H1g4bVnZ3tvLugJdt7cpzyL0/bimtoMtOBOczsxwzPsZnVGTALQciO9doIpP+0GAuqRd0DD6EsMMbd9h4UQY127OnnwMJXNojCxiJkuCGkGCZ4Fg/SQktbI+0obVQpP3R/tb/xdCaLQS/whc3/mcPUecR6t21oZTihfoPH680CqqU6dVClLvfnFp5A8yfPQqpTxGpmQR8W0J/nI/G2OPJ/hS3+E2BugKdfer9eeK3k/0g3v5GSfM8H1/Uj6qIpJv/PusO0lbOrBre2MAYpG3WhJ+t358KJiVDnwEh8ayC5msTd6atXdo+19GUjdcfyJkaW0Sas3I0DySHcSXvQNqWesJjhdvzANCXX4jqdAcWqaIyvzZLvkJCoU3OjLhvY1euqtXUwGlsrfBpzoqkGCdI1B4bbrClTtO3GLzHDoSn10c9t1CewRQCJNfS3DjoFKl0Zey4UICk2aOVNyMI0iCGcsByhMo0/GtAUfv9Xg+/BthEMpx+OYsaNg4fHNhbNtgFuOIPazzL+QU/4iePv9rF0QV3X8e2P9JByy5JVtl4s7VbAl+PH1mpzbP9CxcynUK9MHiJh2/Wuhd4XFnbZhQn8++es0CpHxDMqt3DYf5q3KyJ8uLPpWZD30tdHH7S1KNt7Zf3rzVfDwkQgfVOehwoSFbb6e5bStbYR8rdv2mVK+1ymfXIsBxl7Zgbdr5UBsAd1wT6uriqt7YrCtOVlOFy5l0Y9Zy0AMDCuKK1aXNCytUvSEDeEy5Ts95Qu5zG3aadfy0gVqv/TRZv9GNcJY1lukFxRXc1mPY34ff6KWYoPb+dwqRS9qBu25vVQNXK+l8/cEDM+GIw6Qvea3JIdjKKkaIvNq4TP28sHuejfir+kYgqQppCkPIEUTr22zD2lVZtqCosjKKt1m7Dilz+RSl90uoqwv8TPdfr6bh39XMiwETnKU3AAAAABJRU5ErkJggg==',
                transcript: '',
                project: 'Project C',
                price: '£15.55',
                date: '20-Apr-2016',
                user: 'Guest',
                organisation: 'ABC Construction',
                canDictate: true
            });
 */
            ReceiptApi.all('receipts').getList().then(function (res) {
                $scope.receipts = res.plain();
            }, function () {
                notify({ message:'Fetch Receipts Failed', duration:3000, classes:'alert-fail'} );
            });
        }

        initialise();
    }]);
;'use strict';

angular.module('app')
    .controller('formValidationExampleController', ['$scope', function($scope){

        $scope.master = {};

        $scope.update = function(user) {
            $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
            $scope.user = angular.copy($scope.master);
        };

        $scope.reset();

    }]);;'use strict';

angular.module('app')
    .controller('LoginController', ['$scope', 'notify', '$state', 'userService', function ($scope, notify, $state, userService) {

        function initialise(){
            if (userService.isLoggedIn()){
                $state.transitionTo('newReceipt');
            }

            $scope.user = {
                organisation: 'Test Company',
                logon: 'Guest',
                password: 'password',
                rememberMe: true
            };
        }

        $scope.submitLogon = function(){
            if (!$scope.loginForm.$invalid) {
                /*
                ReceiptApi.all('session').post($scope.user).then(function (res) {
                    // Successful login
                    userService.logIn($scope.values.username, res.access_token, res.role, res.campaign);
                    $state.transitionTo('newReceipt');
                }, function () {
                    // Unsuccessful Login
                    notify({ message:'Login Failed', duration:3000, classes:'alert-fail'} );
                });
                */
                if ($scope.user.logon === 'Guest' && $scope.user.password === 'password') {
                    // Successful login
                    userService.logIn($scope.user.logon, 'ABCDE12345', $scope.user.organisation);
                    $state.transitionTo('newReceipt');
                } else {
                    // Unsuccessful Login
                    notify({ message:'Login Failed', duration:3000, classes:'alert-fail'} );
                }
            }
        };

        initialise();
    }]);
;'use strict';

angular.module('app')
    .controller('MainController', ['$scope', function ($scope) {

        function initialise(){
            $scope.myProperty = 'A Value';
        }

        initialise();
    }]);
;'use strict';

angular.module('app')
    .controller('NewNotesController', ['$scope', '$state', 'newReceiptDataService', function ($scope, $state, newReceiptDataService) {

        var recognition = undefined;

        function initialise(){
            $scope.receipt = newReceiptDataService.getReceipt();
            $scope.recording = false;
            defineRecorder();
        }

        $scope.toggleDictation = function(){
            if ($scope.recording){
                recognition.stop();
            } else {
                if (recognition){
                    recognition.start();
                } else {
                    $scope.receipt.canDictate = false;
                    $state.go('editNotes');
                }
            }
        };

        function defineRecorder(){
            if (window.hasOwnProperty('webkitSpeechRecognition')) {
                recognition = new webkitSpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.lang = "en-GB";

                recognition.onresult = function(e) {
                    var finalTranscript = "";
                    for (var i = e.resultIndex; i < e.results.length; ++i) {
                        if (e.results[i].isFinal) {
                            finalTranscript += e.results[i][0].transcript;
                        }
                    }
                    completeRecording(finalTranscript);
                };

                recognition.onerror = function(e) {
                    recognition.stop();
                    $scope.recording = false;
                    $scope.receipt.canDictate = false;
                    $scope.$apply();
                    $state.go('editNotes');
                };

                recognition.onstart = function(e){
                    $scope.recording = true;
                    $scope.$apply();
                };

                recognition.onend = function(e){
                    $scope.recording = false;
                    $scope.$apply();
                };
            }
        }

        function completeRecording(transcript){
            $scope.receipt.transcript = transcript;
            $scope.receipt.date = moment().format("DD MMM YYYY");
            $scope.receipt.canDictate = true;
            $scope.$apply();
            $state.go('editNotes');
        }

        initialise();
    }]);
;'use strict';

angular.module('app')
    .controller('NewReceiptController', ['$scope', '$state', 'newReceiptDataService', 'userService', function ($scope, $state, newReceiptDataService, userService) {

        function initialise(){
            $scope.receipt = newReceiptDataService.newReceipt();
        }

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

        initialise();
    }]);
;'use strict';

angular.module('app')
    .directive('currentUser',function(){
        return {
            templateUrl: 'views/directives/currentUser.html'
        };
    });;'use strict';

angular.module('app')
    .directive('expHtmlDirective',function(){
        return {
            templateUrl: 'views/directives/directiveExampleHtmlTemplate.html'
        };
    });;'use strict';

angular.module('app')
    .directive('expInLineDirective',function(){
        return {
            template: 'Customer Name: {{customer.name}}'
        };
    });'use strict';

angular.module('app')
    .directive('focus', ['$timeout', '$parse', function($timeout, $parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.$watch(attrs.focus, function(newValue, oldValue) {
                    if (newValue) { element[0].focus(); }
                });
                element.bind("blur", function(e) {
                    $timeout(function() {
                        scope.$apply(attrs.focus + "=false");
                    }, 0);
                });
                element.bind("focus", function(e) {
                    $timeout(function() {
                        scope.$apply(attrs.focus + "=true");
                    }, 0);
                })
            }
        }
    }]);;'use strict';

angular.module('app')
    .factory('ReceiptApi', ['Restangular', 'RECEIPT_API_URL', function (Restangular, url) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl(url);
            RestangularConfigurer.addRequestInterceptor(function (element, operation, what) {
                if (operation === 'post' && what === 'info') {
                    //post web request to the info endpoint
                }

                return element;
            });

            RestangularConfigurer.addResponseInterceptor(function (data, operation, what) {

                if (operation === 'get' && what === 'info') {
                    //get web request from the info endpoint
                }

                return data;
            });
        });
    }]);
;'use strict';

angular.module('app')
    .service('newReceiptDataService', [function() {

        var _receipt = {
            file: '',
            transcript: '',
            project: '',
            price: '',
            date: '',
            user: '',
            organisation: '',
            canDictate: true
        };

        function resetReceipt(){
            _receipt.file = '';
            _receipt.transcript = '';
            _receipt.project = '';
            _receipt.price = '';
            _receipt.date = '';
            _receipt.user = '';
            _receipt.organisation = '';
            _receipt.canDictate = true;
        }

        return {
            getReceipt: function () {
                return _receipt;
            },
            newReceipt: function () {
                resetReceipt();
                return _receipt;
            }
        }

    }]);;'use strict';

angular.module('app')
    .service('transcriptParser', [function() {

        function extractProject(transcript){

            var transcriptCopy = new String(transcript);
            transcriptCopy = transcriptCopy.toLowerCase();

            var projectIndex = getTagValueStartIndex(transcriptCopy, 'project');

            if (projectIndex < 0){
                return '';
            }

            var projectName = transcript.substring(projectIndex, getTagValueEndIndex(transcriptCopy, projectIndex, true));
            return projectName;
        }

        function extractPrice(transcript){

            var transcriptCopy = new String(transcript);
            transcriptCopy = transcriptCopy.toLowerCase();

            var priceIndex = getTagValueStartIndex(transcriptCopy, 'price');

            if (priceIndex < 0){
                return '';
            }

            var priceValue = transcript.substring(priceIndex, getTagValueEndIndex(transcriptCopy, priceIndex));
            return priceValue;
        }

        function getTagValueStartIndex(transcript, tag){
            var tagIndex = transcript.indexOf(tag);
            if (tagIndex < 0){
                return -1;
            }
            //tag value will be at the tag end plus one space from the tag start index
            tagIndex = tagIndex + tag.length + 1;
            //compare to length of the transcript (not zero based) and if the same length then there is no value
            if (tagIndex >= transcript.length){
                return -1;
            }
            return tagIndex;
        }

        function getTagValueEndIndex(transcript, startIndex, includeSpaces){
            var possibleTagValueEndIndexes = [];

            //add the transcript end index to our array of possible end indexes
            possibleTagValueEndIndexes.push(transcript.length);

            if (!includeSpaces){
                var nextSpaceIndex = transcript.indexOf(' ',startIndex);
                if (nextSpaceIndex > -1){
                    possibleTagValueEndIndexes.push(nextSpaceIndex);
                }
            }

            //search to see if there are any further "project" tags. If so, we'll end the tag value there
            var nextProjectTagIndex = transcript.indexOf('project',startIndex);
            if (nextProjectTagIndex > -1){
                possibleTagValueEndIndexes.push(nextProjectTagIndex);
            }

            //search to see if there are any further "price" tags. If so, we'll end the tag value there
            var nextPriceTagIndex = transcript.indexOf('price',startIndex);
            if (nextPriceTagIndex > -1){
                possibleTagValueEndIndexes.push(nextPriceTagIndex);
            }

            //the tag value end index is the lowest value within our possibles array
            return Math.min.apply(Math, possibleTagValueEndIndexes);
        }

        return {

            parseProject: function (transcript) {
                var project = extractProject(transcript);
                return project;
            },
            parsePrice: function (transcript) {
                var project = extractPrice(transcript);
                return project;
            }
        }

    }]);;'use strict';

angular.module('app')
    .service('userService', ['ipCookie', 'ReceiptApi', '$q', function userService(ipCookie, ReceiptApi, $q) {

        var loggedIn = false;
        var authTokenIsValid = false;


        this.getCurrentUser = function () {
            return ipCookie('currentUser');
        };

        this.setCurrentUser = function (user) {
            ipCookie('currentUser', user, { expires: 1 });
            authTokenIsValid = true;
        };

        this.logIn = function (username, token, organisation) {

            var user = {
                username: username,
                token: token,
                organisation: organisation
            };

            this.setCurrentUser(user);

            // these could be methods in the future
            loggedIn = true;
        };

        this.getToken = function () {
            var user = this.getCurrentUser();

            if (user) {
                return user.token;
            } else {
                return false;
            }
        };

        this.getOrganisation = function () {
            var user = this.getCurrentUser();

            if (user) {
                return user.organisation;
            } else {
                return false;
            }
        };

        this.checkTokenValidity = function (token) {

            var defer = $q.defer();

            if (authTokenIsValid) {

                defer.resolve(true);

            } else {

                var dis = this;
                //ReceiptApi.one('session', token).get().then(function () {
                if (token === 'ABCDE12345'){
                    loggedIn = true;
                    authTokenIsValid = true;
                    defer.resolve(true);
                } else {
                   //}, function () {
                    //    dis.logout();
                    defer.resolve(false);
                    //});
                }
            }

            return defer.promise;
        };

        this.isLoggedIn = function () {

            var isLoggedIn = $q.defer();
            var token = this.getToken();

            if (token) {
                this.checkTokenValidity(token).then(isLoggedIn.resolve);

            } else {
                ipCookie.remove('currentUser');
                isLoggedIn.resolve(false);

            }

            return isLoggedIn.promise;

        };

        this.logout = function () {
            var defer = $q.defer();
            var token = this.getToken();

            if (!this.getCurrentUser()) {
                defer.resolve(false);
            }

            //ReceiptApi.one('session', token).remove().then(function () {
                // success
                ipCookie.remove('currentUser');

                loggedIn = false;

                authTokenIsValid = false;

                defer.resolve(true);

            //}, function () {
            //    // failure
            //    defer.resolve(false);
            //});

            return defer.promise;
        };

    }]);