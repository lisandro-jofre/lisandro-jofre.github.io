(function() {
	"use strict";

	angular
		.module("app")
		.component("appIcon", {
			templateUrl: "partials/icon.tpl.html",
			bindings: {
				icon: "@"
			}
		});
})();