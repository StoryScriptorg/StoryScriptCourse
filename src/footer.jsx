import React from "react";
import "./css/footer.css";

const theme = localStorage.getItem("theme");
if(theme === "dark") {
	require("./css/dark/footer-dark.css");
} else if (theme === "solarized") {
	require("./css/solarized/footer-solarized.css");
}

function Footer() {
	function setDarkTheme() {
		localStorage.setItem("theme", "dark");
		window.location.reload();
	}
	function setLightTheme() {
		localStorage.setItem("theme", "light");
		window.location.reload();
	}
	function setSolarizedTheme() {
		localStorage.setItem("theme", "solarized");
		window.location.reload();
	}

	return <footer>
		<div id="switchTheme">
			Switch theme: 
			<button onClick={setDarkTheme}>Dark theme</button> 
			<button onClick={setLightTheme}>Light theme</button> 
			<button onClick={setSolarizedTheme}>Solarized dark theme</button>
		</div>
		<div id="extraInfo">
			Built on React, Powered by <a className="link" href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer">react-icons</a> with <a className="link" href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">Font awesome</a> module.
		</div>
	</footer>;
}

export default Footer;