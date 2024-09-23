import '../css/home.css';
import introImageOne from '../assets/images/hero-image-1.png';
import introImageTwo from '../assets/images/hero-image-2.jpg';

const createCard = ({ title, introOne, introTwo, buttonText, image }) => {
	const card = document.createElement('article');
	const cardBody = document.createElement('div');
	const cardTitle = document.createElement('div');
	const cardH2 = document.createElement('h2');
	const cardText = document.createElement('div');
	const cardIntroTextOne = document.createElement('p');
	const cardIntroTextTwo = document.createElement('p');
	const cardControl = document.createElement('div');
	const cardButton = document.createElement('button');
	const cardLogo = document.createElement('div');
	const cardImg = document.createElement('img');

	card.className = 'card';
	cardBody.className = 'card-body';
	cardTitle.className = 'card-title';
	cardText.className = 'card-text';
	cardControl.className = 'card-control';
	cardLogo.className = 'logo';

	cardH2.textContent = title;
	cardIntroTextOne.textContent = introOne;
	cardIntroTextTwo.textContent = introTwo;
	cardButton.textContent = buttonText;
	cardImg.src = image;

	cardTitle.appendChild(cardH2);
	cardText.append(cardIntroTextOne, cardIntroTextTwo);
	cardControl.appendChild(cardButton);
	cardLogo.appendChild(cardImg);
	cardBody.append(cardTitle, cardText, cardControl);
	card.append(cardBody, cardLogo);

	return card;
};

export const createHomeSection = () => {
	const homeSection = document.createElement('section');
	homeSection.id = 'home';

	const cardOneText = {
		title: 'Rebel against tradition, taste the revolution',
		introOne:
			"At Ramen Rebellion, we don't just serve ramen – we break the rules. Our bowls are a rebellion against the common man, fearlessly blending age-old Japanese techniques with new flavors. From sweet and savory juices to hand-pulled noodles, we take comfort food and give it a bold and spicy twist to the top.",
		introTwo:
			'Whether you indulge in our fiery "Rebel Red" or indulge in the heroic vegan "Green Samurai", every bite is an act of defiance. Go inside, embrace the chaos and taste the ramen revolution!',
		buttonText: 'Book a table',
		image: introImageOne,
	};
	const cardTwoText = {
		title: 'Who we are: Rebels in the ramen cause',
		introOne:
			'The ramen rebellion was born out of a passionate love for ramen and a hunger to shake things up. Delving into the depth of Japanese ramen culture, our founders decided to go beyond tradition and create something unapologetically exciting. We mix the soul of classic ramen with rebellious flavor, pushing the boundaries with every bowl we serve.',
		introTwo:
			"Our menu reflects this spirit – from spicy, unconventional broths to vegan options, we've got something for every rebel out there. We are all about community, taste, and rule breaking. Welcome to the Ramen Rebellion – where ramen isn't just food, it's a movement!",
		buttonText: 'Learn More...',
		image: introImageTwo,
	};

	const cardOne = createCard(cardOneText);
	const cardTwo = createCard(cardTwoText);

	homeSection.append(cardOne, cardTwo);
	return homeSection;
};
