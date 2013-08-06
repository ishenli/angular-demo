/**
 * User: shenli
 * Date: 13-8-6
 * Time: 下午5:35
 * To change this template use File | Settings | File Templates.
 */

angular.module('phonecatServices', ['ngResource']).
    factory('Phone', function($resource){
        return $resource('phones/:phoneId.json', {}, {
            query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
        });
    });