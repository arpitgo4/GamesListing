import React from 'react';

export default class Footer extends React.Component {
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-5 col-xs-5 col-md-5 col-lg-5 col-sm-offset-1">
						&copy; Capillary Technologies, 2015 All Rights Reserved. Privacy Policy
					</div>
					<div className="col-sm-4 col-xs-4 col-md-4 col-lg-4 col-sm-offset-7">
						<i class="ionicons ion-social-facebook-outline"></i>
					</div>
				</div>
			</div>
		);
	}
}