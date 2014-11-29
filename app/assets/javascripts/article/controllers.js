/**
 * Created by xmitya on 19.11.14.
 */
define([], function(){
    'use strict';

    var ArticleCtrl = function($scope, articleService) {
        $scope.articles = [];
        articleService.getArticles(function(data){
            $scope.articles = data;
        });
    };

    ArticleCtrl.$inject = ['$scope', 'articleService'];

    return {
        ArticleCtrl: ArticleCtrl
    };
});