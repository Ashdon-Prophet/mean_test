var app = angular.module('meanTest', ['ui.router']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home.ejs',
                controller: 'MainCtrl'
            })
            .state('add', {
                url: '/add',
                templateUrl: '/add.ejs',
                controller: 'MainCtrl'
            })
            .state('questions', {
                url: '/questions/{id}',
                templateUrl: '/questions.ejs',
                controller: 'QuestionsCtrl'
            })
        $urlRouterProvider.otherwise('home');
    }
]);

app.factory('questions', [
    function(){
        var questions = {
            questions: []
        };
        return questions;
    }
]);

app.controller('MainCtrl', [
    '$scope',
    'questions',
    '$location',
    function($scope, questions, $location){
        $scope.questions = questions.questions;
        $scope.addQuestion = function(){
            if(!$scope.title || $scope.title === '') {
                return;
            }
            $scope.questions.push({
                title: $scope.title,
                description: $scope.description,
                upvotes: 0
            });
            $scope.title = '';
            $scope.description = '';
            $location.url('/home')
        };
    }
]);
app.controller('QuestionsCtrl', [
    '$scope',
    '$stateParams',
    'questions',
    function($scope, $stateParams, questions){
        $scope.question = questions.questions[$stateParams.id];
        console.log($scope.question)
        $scope.addAnswer = function(){
            console.log($scope.body)
            if($scope.body === '') {
                return;
            }
            console.log($scope.question.answers)
            $scope.question.answers.push({
                body: $scope.body,
                author: 'user',
                question: $scope.question
            });
            $scope.body = '';
        };
    }
]);
