import '../css/menu.css';
import blazeMiso from '../assets/images/blaze-miso.jpeg';
import phoenixShio from '../assets/images/phoenix-shio.jpeg';
import smokehouseRamen from '../assets/images/smokehouse-ramen.jpeg';
import temptestVeggineRamen from '../assets/images/temptest-veggie-ramen.jpeg';
import tsunamiTonkotsu from '../assets/images/tonkotsu.jpeg';
import yuzuCitrus from '../assets/images/yuzu-citrus.jpeg';

const data = [
	{
		image: tsunamiTonkotsu,
		title: 'Tsunami Tonkotsu',
		description:
			'An Oceanic Take on Tradition – Dive into a smooth, ocean-inspired broth infused with seaweed and dashi. The Tsunami Tonkotsu is topped with marinated chashu pork, soft-boiled egg, shrimp tempura, scallions, sesame seeds, and a drizzle of spicy mayo for a burst of flavor.',
		price: {
			euro: '13.50',
			yen: '2,000',
		},
	},
	{
		image: blazeMiso,
		title: 'Blaze Miso Ramen',
		description:
			'Turn Up the Heat – This spicy miso broth is packed with ground pork, roasted garlic oil, and spicy chili paste. Topped with fiery chili-marinated chicken, bean sprouts, bamboo shoots, and corn, and garnished with chili threads and Sichuan pepper for a numbing spice.',
		price: {
			euro: '11.50',
			yen: '1,700',
		},
	},
	{
		image: yuzuCitrus,
		title: 'Yuzu Citrus Shoyu',
		description:
			'Bright, Zesty, and Bold – Discover the unique taste of citrus with this soy-based broth, paired with tender chicken chashu and topped with wild mushrooms and bok choy. A yuzu-infused chili oil, lemon zest, and microgreens add a refreshing twist to every bite.',
		price: {
			euro: '11.50',
			yen: '1,700',
		},
	},
	{
		image: smokehouseRamen,
		title: 'Smokehouse Ramen',
		description:
			'For the BBQ Lovers – Smoky soy and beef broth create a robust flavor base for thick-cut braised short rib, smoked egg, and grilled enoki mushrooms. Topped with house-pickled daikon, crispy onions, and a dusting of smoked paprika for a hearty, smoky experience.',
		price: {
			euro: '14.00',
			yen: '2,100',
		},
	},
	{
		image: temptestVeggineRamen,
		title: 'Tempest Veggie Ramen',
		description:
			'A Storm of Flavors – A miso and kombu broth loaded with fresh veggies, tofu cubes, shiitake mushrooms, sweet corn, and grilled cherry tomatoes. Topped with basil leaves, sesame seeds, and a drizzle of black garlic oil for a deep, savory taste.',
		price: {
			euro: '10.50',
			yen: '1,600',
		},
	},
	{
		image: phoenixShio,
		title: 'Phoenix Shio Ramen',
		description:
			'A Light and Fiery Revival – A delicate, salt-based shiobroth with a spicy twist. Topped with grilled chicken thigh, baby spinach, bamboo shoots, and sweet corn. Garnished with red pepper flakes, sesame seeds, and a hint of lime for a balanced,refreshing flavor.',
		price: {
			euro: '11.00',
			yen: '1,650',
		},
	},
];

const createMenuCard = ({ image, title, description, price }) => {
	const card = document.createElement('article');
	const cardImgContainer = document.createElement('div');
	const cardTitleContainer = document.createElement('div');
	const cardBodyContainer = document.createElement('div');
	const cardImage = document.createElement('img');
	const cardTitle = document.createElement('h3');
	const cardDescription = document.createElement('p');
	const cardPrice = document.createElement('p');
	const cardPriceBoldWrapper = document.createElement('strong');

	card.className = 'menu-card';
	cardImgContainer.className = 'menu-card-image';
	cardTitleContainer.className = 'menu-card-title';
	cardBodyContainer.className = 'menu-card-body';

	cardImage.src = image;
	cardTitle.textContent = title;
	cardDescription.textContent = description;
	cardPriceBoldWrapper.textContent = `Price: €${price.euro} / ¥${price.yen}`;

	cardImgContainer.appendChild(cardImage);
	cardTitleContainer.appendChild(cardTitle);
	cardBodyContainer.appendChild(cardDescription);
	cardPrice.appendChild(cardPriceBoldWrapper);
	cardBodyContainer.appendChild(cardPrice);

	card.append(cardImgContainer, cardTitleContainer, cardBodyContainer);

	return card;
};

export const createMenuSection = () => {
	const menuSection = document.createElement('section');
	menuSection.id = 'menu';

	const menuHeader = document.createElement('header');
	const headerTitle = document.createElement('h2');
	const headerDivider = document.createElement('div');
	headerDivider.className = 'divider';
	const headerDescription = document.createElement('p');

	headerTitle.textContent = 'Our Menu';
	headerDescription.textContent =
		'Experience the taste of Japan with our signature ramen creations. We gladly accept both Euros (€) and Yen (¥) for your convenience.';

	menuHeader.appendChild(headerTitle);
	menuHeader.appendChild(headerDivider);
	menuHeader.appendChild(headerDescription);
	menuSection.appendChild(menuHeader);

	data.forEach((item) => {
		const menuItem = createMenuCard(item);
		menuSection.appendChild(menuItem);
	});

	return menuSection;
};
