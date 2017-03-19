import React from 'react';
import { Link, browserHistory } from 'react-router';
import superagent from 'superagent';
import Actions from '../reducers/actions';

import Search from '../components/Search/Search.component';
import GameList from '../components/GameList/GameList.component';

export default class Game extends React.Component {

	constructor(props){
		super(props);
		this.state = { search_param: '' };
	}

	componentWillMount(){
		const store = this.context.store;
		console.log(store.getState());
		if(store.getState().user == null){
			alert('User not logged in !!');
			browserHistory.push('/');
		}
	}

	componentDidMount(){
		const store = this.context.store;
		superagent
			.get('/api/games')
			.set('Authorization', `JWT ${store.getState().user.jwt}`)
			.end((err, res) => {
				store.dispatch({ type: Actions.ADD_GAMES, payload: res.body });
			});
	}

	render() {
		return (
			<div>
				<Search onClick={this.handleClick.bind(this)} />
				<GameList search={this.state.search_param} />
			</div>
		);
	}

	handleClick(search_param){
		console.log('Searching for ....', search_param);
		this.setState({ search_param });
	}
}

Game.contextTypes = {
	store: React.PropTypes.object
};