import React from 'react';

import logo from '../../assets/images/capillary_logo.png';
import UserProfile from './UserProfile.component';

export default class Header extends React.Component {
	render(){
		return (
			<div id="header" className="container-fluid">				
				<div id="header-row" className="row">
					<div className="col-sm-5 col-md-5 col-lg-5">
						<img id="logo" className="img-responsive" src={logo} />
					</div>
					<div className="col-sm-1 col-sm-offset-6 col-md-1 col-md-offset-6 col-lg-1 col-lg-offset-6">
						<UserProfile />						
					</div>
				</div>
			</div>
		);
	}
}