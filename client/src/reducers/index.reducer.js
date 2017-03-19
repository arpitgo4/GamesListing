
import Actions from './actions';

/*const state = {
	user: {

	},
	game_list: [
		{

		}
	]
};*/

const reducer = (state = {}, action) => {
	let nextState = null;

	switch(action.type){
		case Actions.ADD_GAMES: return state;
		case Actions.PUT_USER: 
			nextState = Object.assign(state, { user: action.payload });
			console.log(nextState);
			return nextState;

		case Actions.DELETE_USER: 
			nextState = Object.assign(state, { user: null });
			console.log(nextState);
			return nextState;			

		default: return state;
	}
};

export default reducer;