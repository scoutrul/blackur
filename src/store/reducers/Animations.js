export const APPEAR_BEFORE = 'APPEAR_BEFORE';
export const APPEAR_AFTER = 'APPEAR_AFTER';
export const LEAVE_ANIMATION = 'LEAVE_ANIMATION';


const initialState = {
	isAppearBefore: false,
	isAppearAfter: false,
	leaveAnimation: false,
	timeToWait: 480
};

export default(state = initialState, action) => {
	switch (action.type) {
		case APPEAR_BEFORE:
			return { ...state, ...action.payload };
		case APPEAR_AFTER:
			return { ...state, ...action.payload };
		case LEAVE_ANIMATION:
			return { ...state, ...action.payload };
		default:
			return state
	}
}


export function appearBefore_action() {
	const payload = { isAppearBefore: true, isAppearAfter: false, leaveAnimation: false };
	return { type: APPEAR_BEFORE, payload }
}

export function appearAfter_action() {
	const payload = { isAppearBefore: false, isAppearAfter: true, leaveAnimation: false };
	return { type: APPEAR_AFTER, payload }
}

export function leaveAnimation_action() {
	const payload = { isAppearBefore: true, isAppearAfter: true, leaveAnimation: true };
	return { type: LEAVE_ANIMATION, payload }
}