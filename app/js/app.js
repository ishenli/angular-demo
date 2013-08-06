/**
 * User: shenli
 * Date: 13-8-6
 * Time: 下午2:54
 * To change this template use File | Settings | File Templates.
 */

angular.module('phonecat',['phonecatFilters','phonecatServices'])
    .config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/phones',{templateUrl:"partials/phone-list.html",controller:PhoneListCtrl})
        .when('/phones/:phoneId',{templateUrl:'partials/phone-detail.html',controller:PhoneDetailCtrl})
        .otherwise({redirectTo:'/phone'});
}]);