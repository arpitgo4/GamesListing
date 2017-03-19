import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class Search extends React.Component {

	render(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<input type="text" className="form-control" placeholder="Seach (by name)" ref="search_param">
							
						</input>
					</div>
					<div style={{ marginTop: 10 }} className="col-md-6 col-md-offset-3">
						<button onClick={this.search.bind(this)} className="btn btn-primary pull-right">Seach</button>
					</div>
					<div className="col"></div>
				</div>
			</div>
		);
	}

	search(){
		const { search_param } = this.refs;
		console.log('Searching for..', search_param.value);
	}

}

Search.contextTypes = {
	store: React.PropTypes.object
};