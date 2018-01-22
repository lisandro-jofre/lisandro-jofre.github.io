(function() {
	"use strict";

	angular
		.module("app")
		.component("appHeader", {
			templateUrl: "partials/header.tpl.html",
			controller: "HeaderCtrl"
		});
})();