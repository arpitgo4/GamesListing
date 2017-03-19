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
					<div className="col-md-6 col-md-offset-3">
						<button className="btn btn-primary btn pull-right">Seach</button>
					</div>
					<div className="col"></div>
				</div>
			</div>
		);
	}
}

Search.contextTypes = {
	store: React.PropTypes.object
};