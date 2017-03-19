
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

	switch(action.type){
		case Actions.ADD_GAMES: return state;
		case Actions.PUT_USER: 
			const nextState = Object.assign(state, { user: action.payload });
			console.log(nextState);
			return nextState;

		default: return state;
	}
};

export default reducer;