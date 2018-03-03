export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';

const initialState = {
	pageTitle: '',
	works: [
		{
			image1: 'images/bg_1.jpg',
			image2: 'images/bg_2.png',
			header: 'Epson ReadyInk',
			subheader: 'Design & Development',
			title: 'Ready for hassle-free printing?',
			slogan: 'Web application to help Epson provide clients with automatic ongoing support.',
			services: [ 'Product Design', 'Web Development' ],
			text:
				"Thanks to this technology, you'll never run out of ink again. Just register with the retailer or reseller that you purchased the printer from and get a new cartridge is needed. With this automated system, you’ll always have a supply of high-quality ink.",
			url: 'Epson'
		},
		
	],
	pages: {
		works: {
			title: 'Works'
		},
		about: {
			title: 'We ghelp products find their place in digital void.'
		},
		contacts: {
			title: 'We take ambitious projects and are proud of the result.'
		}
	}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PAGE_TITLE:
			return { ...state, pageTitle: action.payload };
		default:
			return state;
	}
};

export function setTitle_action(payload) {
	console.log(payload);
	return { type: SET_PAGE_TITLE, payload };
}
