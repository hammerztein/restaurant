import '../css/menu.css';
import blazeMiso from '../assets/images/blaze-miso.jpeg';
import phoenixShio from '../assets/images/phoenix-shio.jpeg';
import smokehouseRamen from '../assets/images/smokehouse-ramen.jpeg';
import temptestVeggineRamen from '../assets/images/temptest-veggie-ramen.jpeg';
import tsunamiTonkotsu from '../assets/images/tonkotsu.jpeg';
import yuzuCitrus from '../assets/images/yuzu-citrus.jpeg';
console.log(tsunamiTonkotsu);
const createMenuCard = ({ image, title, description, price }) => {
	const card = document.createElement('article');
	const cardImgContainer = document.createElement('div');
	const cardTitleContainer = document.createElement('div');
	const cardBodyContainer = document.createElement('div');
	const cardImage = document.createElement('img');
	const cardTitle = document.createElement('h3');
	const cardDescription = document.createElement('p');
	const cardPrice = document.createElement('p');

	card.className = 'menu-card';
	cardImgContainer.className = 'menu-card-image';
	cardTitleContainer.className = 'menu-card-title';
	cardBodyContainer.className = 'menu-card-body';

	cardImage.src = image;
	cardTitle.textContent = title;
	cardDescription.textContent = description;
	cardPrice.textContent = `Price : €${price.euro} / ¥${price.yen}`;

	cardImgContainer.appendChild(cardImage);
	cardTitleContainer.appendChild(cardTitle);
	cardBodyContainer.appendChild(cardDescription);
	cardBodyContainer.appendChild(cardPrice);

	card.append(cardImgContainer, cardTitleContainer, cardBodyContainer);

	return card;
};

const data = {
	image: tsunamiTonkotsu,
	title: 'Tsunami Tonkotsu',
	description:
		'An Oceanic Take on Tradition – Dive into a smooth,ocean-inspired broth infused with seaweed and dashi. The Tsunami Tonkotsu is topped with marinated chashu pork, soft-boiled egg, shrimp tempura, scallions, sesame seeds, and a drizzle of spicy mayo for a burst of flavor.',
	price: {
		euro: '13.50',
		yen: '2,000',
	},
};

