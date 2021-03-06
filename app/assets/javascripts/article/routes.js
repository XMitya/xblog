/**
 * Created by xmitya on 19.11.14.
 */
define(['angular','./controllers','common'], function(angular, controllers){
    'use strict';

    var module = angular.module('article.routes',['article.services','xblog.common']);
    module.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/articles', {templateUrl:'/assets/javascripts/article/articles.html', controller:controllers.ArticleCtrl})
            .when('/articles/:id', {templateUrl:'/assets/javascripts/article/article.html', controller:controllers.PostCtrl});

    }]);
    return module;
});