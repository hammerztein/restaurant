import '../css/reset.css';
import '../css/styles.css';
import { createHomeSection } from './home.js';
import { createMenuSection } from './menu.js';
import { createContactSection } from './contact.js';

(() => {
	const container = document.querySelector('.container');

	const initializeNavBtns = () => {
		const btns = {
			home: createHomeSection,
			menu: createMenuSection,
			contact: createContactSection,
		};

		const navBtns = document.querySelectorAll('.navbar button');

		navBtns.forEach((button) => {
			const buttonTarget = button.dataset.target;

			button.addEventListener('click', () => {
				loadPage(btns[buttonTarget]);
			});
		});

		navBtns.forEach((button) => {
			getEventListeners();
		});
	};

	const attachEventHandlers = () => {
		initializeNavBtns();
	};

	const clearContainer = () => {
		// Check if main container has children
		if (container.children.length > 0) {
			// Clear container
			container.innerHTML = '';
		}
	};

	const loadPage = (callback) => {
		clearContainer();
		const section = callback();
		container.appendChild(section);
	};

	// Load initial home page
	loadPage(createHomeSection);
	attachEventHandlers();
})();
