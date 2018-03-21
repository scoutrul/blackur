export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';

const initialState = {
	pageTitle: '',
	works: [
		{
			image_main: 'images/works/pr1_cover.jpg',
			images_page: [ 'images/works/pr1_page1.jpg`', 'images/works/pr1_page2.jpg', 'images/works/pr1_page3.jpg' ],
			image1: 'images/works/pr1_bg_1.jpg',
			image2: 'images/works/pr1_bg_2.png',
			header: 'ReadyInk',
			subheader: 'Design & Development',
			title: 'Ready for hassle-free printing?',
			slogan: 'Web application to help Epson provide clients with automatic ongoing support.',
			services: [ 'Product Design', 'Web Development' ],
			text: [
				'Thanks to this technology, you’ll never run out of ink again. Just register with the retailer or reseller that you purchased the printer from and get a new cartridge is needed. With this automated system, you’ll always have a supply of high-quality ink.'
			],
			url: 'ReadyInk'
		},
		{
			image_main: 'images/works/pr2_cover.jpg',
			images_page: [ 'images/works/pr2_page1.jpg', 'images/works/pr2_page2.jpg', 'images/works/pr2_page3.jpg' ],
			image1: 'images/works/pr2_bg_1.jpg',
			image2: 'images/works/pr2_bg_2.png',
			header: 'Edmunds',
			subheader: 'Design & Development',
			title: 'Let’s find your perfect car.',
			slogan: 'High loaded platform for car owners.',
			services: [ 'Product Design', 'Web Development' ],
			text: [
				'Edmunds is one of the world’s largest automotive platforms with more lots of monthly visitors. It has huge car database with hundreds of different parameters.',
				'Main problem here is really big database, which makes requests processing too slow to be a part of reality. That’s why the main challenge here was to make the site really fast and convenient for the user.'
			],
			url: 'Edmunds'
		},
		{
			image_main: 'images/works/pr3_cover.jpg',
			images_page: [ 'images/works/pr3_page1.jpg', 'images/works/pr3_page2.jpg', 'images/works/pr3_page3.jpg' ],
			image1: 'images/works/pr3_bg_1.jpg',
			image2: 'images/works/pr3_bg_2.png',
			header: 'Cloudburst',
			subheader: 'Concept & Design',
			title: 'Wear technology.',
			slogan: 'Functional clothes for everyone.',
			services: [ 'Brand Vision', 'Visual Design' ],
			text: [
				"The idea of making everyday clothes as simple and functional as possible is as ingenious as it requires a review of the habitual attitude towards clothing in general. Cloudburst offers a new look at how familiar clothing can enhance a person's capabilities."
			],
			url: 'Cloudburst'
		},
		{
			image_main: 'images/works/pr4_cover.jpg',
			images_page: [ 'images/works/pr4_page1.jpg', 'images/works/pr4_page2.jpg', 'images/works/pr4_page3.jpg' ],
			image1: 'images/works/pr4_bg_1.jpg',
			image2: 'images/works/pr4_bg_2.png',
			header: 'Omnistry',
			subheader: 'Design & Development',
			title: 'New level of collaboration.',
			slogan: 'Create media content with friends.',
			services: [ 'Product Design', 'Web Development' ],
			text: [
				'Joint creation of content is the most important for creatives. Omnistry provides an opportunity to share content and quickly create publications together to people in different parts of the world.',
				' We have given professionals a powerful tool in creating and managing media content. Now composing music, writing publications and creating stylish boards can be much more effective.'
			],
			url: 'Omnistry'
		},
		{
			image_main: 'images/works/pr5_cover.jpg',
			images_page: [ 'images/works/pr5_page1.jpg', 'images/works/pr5_page2.jpg', 'images/works/pr5_page3.jpg' ],
			image1: 'images/works/pr5_bg_1.jpg',
			image2: 'images/works/pr5_bg_2.png',
			header: 'Storymaze',
			subheader: 'Mobile app',
			title: 'Discover people’s story through the maze.',
			slogan: 'Mobile app for creating interactive stories.',
			services: [ 'Product Design', 'Mobile Development' ],
			text: [
				'Everyone dreams of becoming a participant in exciting story and going all the way from beginning to the end. Create interesting interactive stories with Storymaze and go through intricate chapters with characters.'
			],
			url: 'Storymaze'
		}
	],
	pages: {
		works: {
			title: 'Works'
		},
		about: {
			title: 'We ghelp products find their place in digital void.',
			content: {
				header_white: 'We are Blackur.',
				header_black: 'And we are in the black.',
				paragraphs_top: [
					'We are young agency with drastically new approach to work. We’ve got rid of everything that prevents us to create perfect products.',
					'We believe that the result is the only important thing in the modern world. And nothing more.'
				],
				slogans: [
					'We just use mathematics.',
					'It helps us to optimize work and brings the best result for every project we work on.'
				],
				paragraphs_bottom: [
					"We have developed a system that helps us to assemble teams of experts to work on each project. It's so smart that can analyze up to several tens of different parameters.",
					'After we get the project information, this system selects the candidate and places it in the overall picture of the team. That’s how our dream team formed.',
					'Every day we examine a lot of resumes to find the best. We make an offer to the unique candidates with interesting experience to keep the quality of our products at the highest level.'
				],
				contacts: {
					slogan: 'Tell about yourself & move to the dark side using ',
					email: 'work@blackur.com'
				}
			}
		},
		contacts: {
			title: 'We take ambitious projects and are proud of the result.'
		}
	},
	menu: [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'Projects',
			url: '/works'
		},
		{
			name: 'Agency',
			url: '/about'
		},
		{
			name: 'Contacts',
			url: '/contacts'
		}
	]
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PAGE_TITLE:
			return { ...state, pageTitle: action.payload || '' };
		default:
			return state;
	}
};

export function setTitle_action(payload) {
	return { type: SET_PAGE_TITLE, payload };
}
