import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class Search extends React.Component {

	render(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<input type="text" className="form-control autocomplete" placeholder="Seach (by title)" ref="search_param">
							
						</input>
					</div>
					<div style={{ marginTop: 10 }} className="col-md-6 col-md-offset-3">
						<button onClick={() => this.props.onClick(this.refs.search_param.value)} style={{ backgroundColor: '#84BB41' }} className="btn btn-primary pull-right">Seach</button>
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