import { data } from './data.js'
export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';

const initialState = data;

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
