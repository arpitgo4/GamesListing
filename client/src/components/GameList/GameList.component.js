import React from 'react';

import GameRow from '../GameRow/GameRow.component';
import Pagination from '../Pagination/Pagination.component';

import SortUp from '../../assets/images/sort_up.png';
import SortDown from '../../assets/images/sort_down.png';

export default class GameList extends React.Component {

	constructor(props){
		super(props);
		this.NUMBER_OF_GAMES_ON_PAGE = 20;
		this.state = { games: [], games_on_page: [], search_param: this.props.search_param, sortIcon: SortUp }; 
	}

	componentWillMount(){
		const store = this.context.store;
		store.subscribe(() => {
			let games = store.getState().game_list;
			if(games != null){
				console.log('search_param', this.state.search_param);
				if(this.state.search_param !== '' && this.state.search_param){
					console.log('filtering list.....');
					games = games.filter(game => game.title.contains(this.state.search_param));
				}
				this.setState({ games, games_on_page: games.slice(0, this.NUMBER_OF_GAMES_ON_PAGE) });
			}
		});
	}

	render(){

		return (
			<div style={{ marginTop: 20 }} className="container table-responsive">
				<div className="row">
					<table className="table table-hover ">
						<thead>
							<th className="text-center">Title</th>
							<th className="text-center">Platform</th>
							<th onClick={this.sortlist.bind(this)} className="text-center btn"><b>Score</b><img id="sort-icon" src={this.state.sortIcon} className="glyphicon" /></th>
							<th className="text-center">Genre</th>
							<th className="text-center">Editor's Choice</th>
						</thead>
						{this.state.games_on_page.map(game => 
							(<GameRow key={game._id} value={game} />)
						)}
					</table>
					<Pagination handleClick={this.pageClick.bind(this)}
						value={this.state.games.slice(0, (this.state.games.length + 1) / this.NUMBER_OF_GAMES_ON_PAGE)} />
				</div>
			</div>
		);
	}

	sortlist(e){
		let icon = this.state.sortIcon;
		let games = this.state.games;
		let page = (this.page === 0 || !this.page) ? 1 : this.page;

		let games_on_page = [];
		switch(icon){
			case SortUp: icon = SortDown;
						games = games.sort((a, b) => (parseFloat(a.score) - parseFloat(b.score)) >= 0);  // ascending
						break;
			case SortDown: icon = SortUp;
						games = games.sort((a, b) => (parseFloat(a.score) - parseFloat(b.score)) < 0);	// descending						
						break;
		}
		games_on_page = games.slice((page - 1)  * this.NUMBER_OF_GAMES_ON_PAGE, page * this.NUMBER_OF_GAMES_ON_PAGE)
		console.log(games_on_page);
		this.setState({ sortIcon: icon, games, games_on_page });
	}

	pageClick(page){
		this.page = page;
		const prevGames = this.state.games;
		this.setState({ games: prevGames, 
						games_on_page: prevGames.slice((page - 1) * this.NUMBER_OF_GAMES_ON_PAGE, page * this.NUMBER_OF_GAMES_ON_PAGE)
					});
	}

	componentDidUnmount(){
		this.context.store.unsubscribe();
	}
}

GameList.contextTypes = {
	store: React.PropTypes.object
};