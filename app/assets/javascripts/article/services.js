/**
 * Created by xmitya on 18.11.14.
 */
define(['angular'], function(angular){
    'use strict';
    var module = angular.module('article.services', ['xblog.common']);
    module.factory('articleService', ['playRoutes', '$log', function(playRoutes, $log){

        return {

            getArticles: function(callback, startPage, pageSize, orderBy) {
                $log.debug('Loading articles');
                return playRoutes.controllers.Articles.getArticles(startPage, pageSize, orderBy)
                    .get().then(function (response) {
                        callback(response.data);
                        return response.data;
                    });
            }

        };
    }]);
});