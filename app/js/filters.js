/**
 * User: shenli
 * Date: 13-8-6
 * Time: 下午4:32
 * To change this template use File | Settings | File Templates.
 */

angular.module('phonecatFilters',[]).filter('checkmark',function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});

