//Add your JS here please
var app = angular.module('plunker',[]);

//Start controller MainCtrl of app plunker
app.controller('MainCtrl', function($scope) {
    $scope.title_app = "Personal Todo List";
}); // End MainCtrl of app plunker

app.controller('ListCtrl',["$scope", function($scope) {
    $scope.items = ['Projects','Tasks','Appointments','Date'];
    $scope.projects = ['Project 1','Project 2','Project 3','Project 4'];
    $scope.tasks = ['Task 1','Task 2','Task 3','Task 4'];
    $scope.appointments = ['Appointment 1','Appointment 2','Appointment 3','Appointment 4'];
    $scope.date = ['Date 1','Date 2','Date 3','Date 4'];
    $scope.myname = "Sublist";
}]);

app.directive('listdata', function() {
    return{
        restrict: 'A',
        template: '<ul><li ng-repeat="data in datalist">{{data}}</li></ul>{{directivename}}',
        scope: {
            datalist: '=mydata',
            directivename: '=myname',
        },
    };
});





