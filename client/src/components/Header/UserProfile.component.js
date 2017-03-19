import React from 'react';
import { Link } from 'react-router';

import user_logo from '../../assets/images/user_profile.png';

export default class UserProfile extends React.Component {
	render(){
		return (
			<div>
				<img id="user-logo" className="img-responsive img-circle dropdown-toggle" 
					data-toggle="dropdown" src={user_logo}></img>
				<ul className="dropdown-menu dropdown-menu-right">
					<li>
						<div style={{ width: 200 }} className="container">
							<div className="row">
								<div className="col-lg-4">
									<img id="user-popup-logo" className="img-responsive" src={user_logo} />
								</div>
								<div style={{ marginTop: 8, fontWeight: 'bold' }} className="col-lg-7">Arpit Goyal</div>
							</div>
						</div>
					</li>
					<li className="divider"></li>
					<li id="profile"><Link to="">Profile</Link></li>
					<li id="logout"><Link to="">Log Out</Link></li>
				</ul>
			</div>
		);
	}
}