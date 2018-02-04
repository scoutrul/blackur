export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';

const initialState = {
	pageTitle: '',
	works: [
		{
			image: 'images/works/epson.png',
			image1: 'images/works/epson1.png',
			image2: 'images/works/epson2.png',
			color: '#0957b6',
			header: 'Epson ReadyInk',
			slogan: 'Design & Development',
			services: ['Product Design', 'Web Development'],
			url: 'Epson'
		},
		{
			image: 'images/works/epson1.png',
			image1: 'images/works/epson2.png',
			image2: 'images/works/epson.png',
			color: '#57b609',
			header: 'Cloudburst',
			slogan: 'Concept & Design',
			services: ['Web Development2', 'Product Design', 'Web Development3'],
			url: 'Cloudburst'
		},
		{
			image: 'images/works/epson2.png',
			image1: 'images/works/epson.png',
			image2: 'images/works/epson1.png',
			color: '#09b657',
			header: 'Edmunds',
			slogan: 'Design & Development & Puppies',
			services: ['DesignProduct ', 'DevelopmentWeb '],
			url: 'Edmunds'
		},
		{
			image: 'images/works/epson.png',
			color: '#0957b6',
			header: 'Storymaze',
			slogan: 'Mobile app',
			services: ['Product Design', ' Development'],
			url: 'Storymaze'
		},
		{
			image: 'images/works/epson.png',
			color: '#b60957',
			header: 'Omnistry',
			slogan: 'Design & Development',
			services: ['Product ', 'Web Development12'],
			url: 'Omnistry'
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
			return state
	}
}

export function setTitle_action(payload) {
	console.log(payload)
	return { type: SET_PAGE_TITLE, payload }
}
