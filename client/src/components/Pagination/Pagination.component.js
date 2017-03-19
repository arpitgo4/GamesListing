import React from 'react';

export default class Pagination extends React.Component {
	constructor(){
		super();
	}

	render(){
		let counter = 0;
		return(
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-lg-offset-5 col-md-4 col-md-offset-5
							col-sm-4 col-sm-4-offset-5 col-xs-4 col-xs-offset-5">
						<ul className="pagination pagination-lg">
							{this.props.value.map(value => {
									counter++;
									return <li><a href="javascript:void(0)" /*className=`${counter == 1 ? 'active': ''}`*/
												onClick={((counter) => () => this.props.handleClick(counter))(counter)}>
												{counter}
												</a>
											</li>
								}
							)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

Pagination.contextTypes = {
	store: React.PropTypes.object
};