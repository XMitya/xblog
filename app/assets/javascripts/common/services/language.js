/**
 * Created by xmitya on 18.11.14.
 */
define(['angular', 'text!json/locale/en-us.json'], function(angular, en_us){
   'use strict';

    var langMod = angular.module('common.language',[]);

    langMod.factory('language', function(){
        return JSON.parse(en_us);
    });
});