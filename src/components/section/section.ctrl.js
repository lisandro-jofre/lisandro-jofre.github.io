(function() {
	"use strict";

	angular
		.module("app")
		.controller("SectionCtrl", function($rootScope, $state, AppConstants) {
			"ngInject";

			var $ctrl = this;
			var sectionParam = $state.params.section;

			if (sectionParam && sectionParam.length > 0 && AppConstants.SECTIONS[sectionParam.toUpperCase()]) {
				$ctrl.section = AppConstants.SECTIONS[$state.params.section.toUpperCase()];
				$ctrl.content = $ctrl.section.CONTENT;
				$ctrl.isArray = angular.isArray;
				$rootScope.bgColor = $ctrl.section.BG_COLOR;
			} else {
				var homeSection = Object.keys(AppConstants.SECTIONS)[0];
				$state.go("section", {section: AppConstants.SECTIONS[homeSection].ROUTE_PARAMS.SECTION});
			}
		});
})();
