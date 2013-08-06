function PhoneListCtrl($scope,$http) {
    $http.get('phones/phone.json').success(function(data) {
        $scope.phones = data;
    });
    $scope.orderProp = 'age';
}

function PhoneDetailCtrl($scope, $routeParams,$http) {
    $http.get("phones/"+$routeParams.phoneId+".json").success(function(data) {
        $scope.phone = data;
        $scope.mainImage=data.images[0];
    })
    $scope.setImage=function(imgUrl){
        $scope.mainImage=imgUrl;
    }
}
