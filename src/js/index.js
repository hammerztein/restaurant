// CSS reset as a side effect
import '../css/reset.css';
import '../css/styles.css';
import { createHomeSection } from './home.js';

(() => {
	const container = document.querySelector('.container');
	const homeBtn = document.querySelector(".navbar button[data-target='home']");

	const attachEventHandlers = () => {
		homeBtn.addEventListener('click', loadHomePage);
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

	loadHomePage();
	attachEventHandlers();
})();

console.log('Script Attached');
