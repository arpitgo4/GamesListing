
import Actions from './actions';

const reducer = (state = {}, action) => {

	switch(action.type){
		case Actions.ADD_GAMES: return state;


		default: return state;
	}
};

export default reducer;