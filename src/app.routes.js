(function() {
	"use strict";

	angular
		.module("app.routes", ["ui.router", "app.partials"])
		.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
			"ngInject";
			
			$locationProvider.hashPrefix("");

			$stateProvider
				.state("section", {
					url: "/:section",
					views: {
						"content@": {
							template: "<app-section></app-section>",
						}
					}
				});

			$urlRouterProvider.otherwise(function($injector, $location){
				var state = $injector.get('$state');
				$injector.get('$state').go("section", {section: "home"});
			});
		});
})();