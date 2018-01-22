(function() {
	"use strict";

	angular
		.module("app")
		.controller("HeaderCtrl", function($rootScope, AppConstants) {
			"ngInject";

			var $ctrl = this;
			
			$ctrl.isNavOpen = false;
			$ctrl.toggleNav = function() {
				$ctrl.isNavOpen = $rootScope.isNavOpen = !$ctrl.isNavOpen;
			};

			$ctrl.menu = [];
			Object.keys(AppConstants.SECTIONS).forEach(function(section) {
				var currentSection = AppConstants.SECTIONS[section];
				$ctrl.menu.push({
					DISPLAY_NAME: currentSection.DISPLAY_NAME,
					ROUTE_PARAMS: {
						SECTION: currentSection.ROUTE_PARAMS.SECTION
					}
				});
			});
		});
})();