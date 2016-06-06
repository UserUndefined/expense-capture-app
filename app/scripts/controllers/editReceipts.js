'use strict';

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
