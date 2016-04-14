(function () {
    angular.module('jstesting').config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../components/Expenses/expense.html'
            })
            .when('/admin', {
                templateUrl: '../components/Admin/admin.html'
            })
            .otherwise({
                redirectTo: '/'
            });
}]);
})();