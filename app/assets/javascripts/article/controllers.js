/**
 * Created by xmitya on 19.11.14.
 */
define([], function(){
    'use strict';

    var ArticlesCtrl = function($scope, articleService) {
        $scope.articles = [];
        articleService.getArticles(function(data){
            $scope.articles = data;
        });
    };

    ArticlesCtrl.$inject = ['$scope', 'articleService'];

    var PostCtrl = function($scope, articleService, $routeParams) {
        $scope.post = {};
        articleService.getPost($routeParams.id, function(post){
            $scope.post = post;
        });
    };

    PostCtrl.$inject = ['$scope', 'articleService', '$routeParams'];

    return {
        ArticleCtrl: ArticlesCtrl,
        PostCtrl:PostCtrl
    };
});