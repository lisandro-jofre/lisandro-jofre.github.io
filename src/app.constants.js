(function() {
	"use strict";

	angular
		.module("app")
		.constant("AppConstants", {

			SECTIONS: {

				HOME: {
					DISPLAY_NAME: "Home",
					BG_COLOR: "#71C2C2",
					ROUTE_PARAMS: {
						SECTION: "home"
					},
					CONTENT: [
						{
							HEADING: "Hey there!",
							DETAILS: "I'm <strong>Lisandro Jofré</strong>, a web developer based in Argentina. Eight years of experience back me up, but hopefully there are more to come. My understanding of requirements, sharp learning curve, attention to detail, contribution to coding standards and adaptation to collaborative environments through all these years have helped staffs and customers that I worked with to achieve their goals."
						}
					]
				},

				EXPERIENCE: {
					DISPLAY_NAME: "Experience",
					BG_COLOR: "#E5AA8C",
					ROUTE_PARAMS: {
						SECTION: "experience"
					},
					CONTENT: [
						{
							"HEADING": "Senior Frontend Developer",
							"POST_HEADING": "VelocityPartners",
							"SUBHEADING": "April 2015 - Present",
							"DETAILS": "I'm currently working for naviHealth as part of a local engineering team in Argentina that joined naviHealth's technical team in Newton, MA. I participate in daily scrums, grooming sessions, sprint demos and planning sessions, as well as in all aspects of the software development process of the end-user product by maintaining and refactoring existing code, developing new features, proposing technical improvements and providing code reviews. The tech stack that I mainly use is composed by HTML, SassCSS, Bootstrap, JavaScript, AngularJS, Jasmine test framework, GulpJS and GIT."
						},
						{
							"HEADING": "Semi-Senior Frontend Developer",
							"POST_HEADING": "Globant",
							"SUBHEADING": "February 2012 - April 2015",
							"DETAILS": "Over the three-year period, I've joined as an offshore consultant to the technical staff of some of the most valuable companies in USA, such as Mercedes Benz, Stella Artois, Kellogg's, Salesforce, along with others. I've taken part in software maintenance and troubleshooting, developed new features from scratch, hooked up back-end services to the client side and converted PSDs to fully functional interfaces. The tech stack that I mainly used is composed by HTML/CSS, JavaScript, jQuery, AngularJS, GulpJS and GIT."
						}
					]
				},

				SKILLS: {
					DISPLAY_NAME: "Skills",
					BG_COLOR: "#A2666F",
					ROUTE_PARAMS: {
						SECTION: "skills"
					},
					CONTENT: [
						{
							HEADING: "Tech Stack",
							DETAILS: [
								"JavaScript, AngularJS, ReactJS, NodeJS",
								"Unit testing, automation",
								"HTML5/CSS3",
								"GIT, SQL"
							]
						},
						{
							HEADING: "Languages",
							DETAILS: [
								"English (Advanced)",
								"Spanish (Native)"
							]
						}
					]
				},

				EDUCATION: {
					DISPLAY_NAME: "Education",
					BG_COLOR: "#CA8766",
					ROUTE_PARAMS: {
						SECTION: "education"
					},
					CONTENT: [
						{
							HEADING: "Education",
							DETAILS: [
								"Instituto Particular \"Gral. Manuel Belgrano\"",
								"Rosario, Argentina",
								"Digital Design Analyst, 2011",
								"Design and Visual Communications"
							]
						}
					]
				},

				CONTACT: {
					DISPLAY_NAME: "Contact",
					BG_COLOR: "#DF7B79",
					ROUTE_PARAMS: {
						SECTION: "contact"
					},
					CONTENT: [
						{
							HEADING: "Contact",
							DETAILS: [
								"+54 341 156-868010",
								"lisandrojofre@gmail.com",
								"<a href=\"https://github.com/lisandro-jofre\">https://github.com/lisandro-jofre</a>",
								"<a href=\"https://www.linkedin.com/in/lisandrojofre\">https://www.linkedin.com/in/lisandrojofre</a>"
							]
						}
					]
				}
			}
		});
})();