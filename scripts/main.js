// Navigation
(navigation = () => {
	const hamMenu = document.querySelector(".ham-nav");
	const hamBTN = document.querySelector(".hamburger-menu");
	const navLogOutBTN = document.querySelector(".ham-nav-logo__logout-btn");
	const logOutBTN = document.querySelector(".nav-list__logout-btn");

	hamBTN.addEventListener("click", () => {
		hamBTN.classList.toggle("ham-dash--toggle");
		hamMenu.classList.toggle("ham-nav--show");
	});

	navLogOutBTN.addEventListener("click", () => {
		window.open("../index.html", "_self");
	});

	logOutBTN.addEventListener("click", () => {
		window.open("../index.html", "_self");
	});
})();
