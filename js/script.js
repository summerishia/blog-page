$(function () {  // same as document.addEventListener("DOMContentLoaded").

	// same as document.querySelector("#navbarToggle").addEventListener("blur").
	// "select" syntax: $(some-css-handle).
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});