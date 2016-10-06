/// <reference path="../../../node_modules/gulp-typescript/release/main.d.ts" />

module app.demo {

    'use strict';

    export interface IDemoCtrl {}
    export class DemoCtrl implements IDemoCtrl {
        constructor(
            public $scope: ng.IScope,
            public $log: ng.ILogService
        ){
            $log.debug('debug log from controller !!! ');
            $log.info('info log from controller !!! ');
        }
    }

    export interface IDemoService {
        getExcited: boolean;
    }
    export class DemoService implements IDemoService {
        getExcited: boolean = false;
    }

    angular
        .module('app.demo', [])
        .directive("demo", function(): ng.IDirective {
            return {
                templateUrl: 'app-templates/demo/demo.html',
                controller:  DemoCtrl,
                controllerAs: 'demoCtrlVM'
            };
        })
        .controller("demoCtrl", DemoCtrl)
        .config(configure)
        .factory("demoService", [() => new app.demo.DemoService()]);

    function configure($logProvider: ng.ILogProvider) {
            $logProvider.debugEnabled(false);
    }
}
