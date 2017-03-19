import React from 'react';

export default class Footer extends React.Component {
	render(){
		return (
			<div className="navbar navbar-default navbar-fixed-bottom">
				<div id="footer-row" className="row">
					<div className="col-sm-5 col-xs-5 col-md-5 col-lg-5 col-sm-offset-1">
						<p id="footer-row-p">&copy; Capillary Technologies, 2017 All Rights Reserved. Privacy Policy</p>
					</div>
					<div className="col-sm-4 col-xs-4 col-md-4 col-lg-4 col-sm-offset-7">
					</div>
				</div>
			</div>
		);
	}
}