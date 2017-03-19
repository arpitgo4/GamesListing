import React from 'react';

export default class GameRow extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<tbody>
				<tr className="text-center">
				<td>{this.props.value.title}</td>
					<td>{this.props.value.platform}</td>
					<td>{this.props.value.score}</td>
					<td>{this.props.value.genre}</td>
					<td>{this.props.value.editors_choice}</td>					
				</tr>
			</tbody>
		);
	}
}

GameRow.contextTypes = {
	store: React.PropTypes.object
};

