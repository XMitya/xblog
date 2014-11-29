/**
 * Created by xmitya on 19.11.14.
 */
define(['angular','./routes','./services', './controllers'], function(angular, routes, services, controllers){
    'use strict';

    var mod = angular.module('xblog.article',['ngRoute','article.routes','article.services']);
    mod.controller('ArticleCtrl', controllers.ArticleCtrl);
    return mod;
});