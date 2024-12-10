import '../css/contact.css';

const data = {
	svg: {
		formButton: {
			title: 'Send Message',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>send-variant-outline</title><path d="M3 20V4L22 12M5 17L16.85 12L5 7V10.5L11 12L5 13.5M5 17V7 13.5Z" /></svg>`,
		},
		address: {
			title: '123 Ramen Street, Flavor Town',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map</title><path d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z" /></svg>',
		},
		phone: {
			title: '(123) 456-7890',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>',
		},
		email: {
			title: 'contact@ramenrebellion.com',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-outline</title><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>',
		},
	},
	formInputs: [
		{
			element: 'input',
			type: 'name',
			name: 'name',
			id: 'name',
			placeholder: 'John Smith',
		},
		{
			element: 'input',
			type: 'email',
			name: 'email',
			id: 'email',
			placeholder: 'John.Smith@example.com',
		},
		{
			element: 'textarea',
			type: null,
			name: 'message',
			id: 'message',
			placeholder: 'Your message here...',
		},
	],
	openHours: {
		'Mon-Fri': '11:00 - 22: 00',
		Sat: '12:00 - 00:00',
		Sun: '12:00 - 19:00',
	},
};

const createFormInput = ({ element, type, name, id, placeholder }) => {
	const formContainer = document.createElement('div');
	formContainer.className = 'form-control';

	const formLabel = document.createElement('label');
	formLabel.for = id;
	formLabel.textContent = `${name.at(0).toUpperCase() + name.slice(1)}`;
	const formInput = document.createElement(element);
	formInput.name = name;
	formInput.id = id;
	formInput.required = 'true';
	formInput.placeholder = placeholder;

	if (element !== 'textarea') {
		formInput.type = type;
	}

	formContainer.appendChild(formLabel);
	formContainer.appendChild(formInput);

	return formContainer;
};

const createForm = ({ formInputs, svg: { formButton } }) => {
	const form = document.createElement('form');
	form.className = 'contact-form';

	formInputs.forEach((input) => {
		const formControl = createFormInput(input);

		form.appendChild(formControl);
	});

	const formSubmitBtn = document.createElement('button');
	const formButtonText = document.createElement('span');
	formButtonText.textContent = formButton.title;
	formSubmitBtn.appendChild(formButtonText);
	formSubmitBtn.innerHTML += `${formButton.icon}`;

	form.appendChild(formSubmitBtn);

	return form;
};

const createAddressArticle = ({ svg }) => {
	const addressArticle = document.createElement('article');
	addressArticle.className = 'contact-address';

	const addressHeader = document.createElement('h3');
	addressHeader.textContent = 'Contact Information';

	const addressContainer = document.createElement('address');

	const addressList = document.createElement('ul');
	const listIcons = Object.keys(svg).filter((icon) => icon !== 'formButton');

	listIcons.forEach((icon) => {
		const listTitle = svg[icon].title;
		const listIcon = svg[icon].icon;
		const listItem = document.createElement('li');
		const listText = document.createElement('span');
		listText.textContent = listTitle;
		listItem.innerHTML += listIcon;
		listItem.appendChild(listText);
		addressList.appendChild(listItem);
	});

	addressContainer.appendChild(addressHeader);
	addressContainer.appendChild(addressList);
	addressArticle.appendChild(addressContainer);

	return addressArticle;
};

const createHoursArticle = ({ openHours }) => {
	const hoursArticle = document.createElement('article');
	hoursArticle.className = 'contact-hours';

	const hoursHeader = document.createElement('h3');
	hoursHeader.textContent = 'Business Hours';

	const hoursList = document.createElement('ul');
	const businessHours = Object.keys(openHours);

	businessHours.forEach((hour) => {
		const hourItem = document.createElement('li');
		const boldWrapper = document.createElement('strong');
		boldWrapper.textContent = hour;
		const hourItemText = document.createTextNode(openHours[hour]);
		hourItem.appendChild(boldWrapper);
		hourItem.appendChild(hourItemText);
		hoursList.appendChild(hourItem);
	});

	hoursArticle.appendChild(hoursHeader);
	hoursArticle.appendChild(hoursList);

	return hoursArticle;
};

export const createContactSection = () => {
	const contactSection = document.createElement('section');
	contactSection.id = 'contact';

	const contactHeader = document.createElement('header');
	const headerTitle = document.createElement('h2');
	headerTitle.textContent = 'Contact Us';
	const headerDivider = document.createElement('div');
	headerDivider.className = 'divider';

	const contactWrapper = document.createElement('div');
	contactWrapper.className = 'contact-wrapper';

	const form = createForm(data);
	const address = createAddressArticle(data);
	const openHours = createHoursArticle(data);

	contactHeader.appendChild(headerTitle);
	contactHeader.appendChild(headerDivider);

	contactWrapper.appendChild(form);
	contactWrapper.appendChild(address);
	contactWrapper.appendChild(openHours);

	contactSection.appendChild(contactHeader);
	contactSection.appendChild(contactWrapper);

	return contactSection;
};
