document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".modal");
	var instances = M.Modal.init(elems, {});
	// display a warning in the console
	console.log(
		"%cHOLA DEV!",
		"color: red;font-size:2.5rem;font-weight:bold;"
	);
	console.log(
		"%cPodemos colaborar, enviame un mensaje.",
		"font-size:1.25rem;line-height:1.1;margin-top:.5em"
	);
	console.log(
		"%c--Ed Ronda.--",
		"font-size:1.25rem;line-height:1.1;margin-top:.5em"
	);

	setTimeout(() => {
		var link = document.getElementById("modalstats");
		link.click();
	}, 2000);
});
