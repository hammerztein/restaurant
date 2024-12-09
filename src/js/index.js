// CSS reset as a side effect
import '../css/reset.css';
import '../css/styles.css';
import { createHomeSection } from './home.js';
import { createMenuSection } from './menu.js';

(() => {
	const container = document.querySelector('.container');
	const homeBtn = document.querySelector(".navbar button[data-target='home']");
	const menuBtn = document.querySelector(".navbar button[data-target='menu'");

	const attachEventHandlers = () => {
		homeBtn.addEventListener('click', loadHomePage);
		menuBtn.addEventListener('click', loadMenuPage);
	};

	const clearContainer = () => {
		// Check if main container has children
		if (container.children.length > 0) {
			// Clear container
			container.innerHTML = '';
		}
	};

	const loadHomePage = () => {
		clearContainer();
		const homeSection = createHomeSection();
		container.appendChild(homeSection);
	};

	const loadMenuPage = () => {
		clearContainer();
		const menuSection = createMenuSection();
		container.appendChild(menuSection);
	};

	loadHomePage();
	attachEventHandlers();
})();

console.log('Script Attached');
