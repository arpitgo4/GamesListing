import React from 'react';
 
import Search from '../components/Search/Search.component';
import GameList from '../components/GameList/GameList.component';
import Pagination from '../components/Pagination/Pagination.component';

export default class Game extends React.Component {
	render() {
		return (
			<div>
				<Search />
				<GameList />
				<Pagination />
			</div>
		);
	}
}

Game.contextTypes = {
	store: React.PropTypes.object
};