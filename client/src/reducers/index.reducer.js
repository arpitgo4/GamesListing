
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
		case Actions.ADD_GAMES: 
			nextState = Object.assign(state, { game_list: action.payload });
			console.log('state', nextState);
			return nextState;
			
		case Actions.PUT_USER: 
			nextState = Object.assign(state, { user: action.payload });
			console.log('state', nextState);
			return nextState;

		case Actions.DELETE_USER: 
			nextState = Object.assign(state, { user: null });
			console.log('state', nextState);
			return nextState;			

		default: return state;
	}
};

export default reducer;