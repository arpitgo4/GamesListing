import React from 'react';
import { Link, browserHistory } from 'react-router';

import Actions from '../../reducers/actions';

import superagent from 'superagent';

export default class Login extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			msg: ''
		};
	}

	render(){
		return (
			<div id="login-form-container" className="container">
			    <div className="row">
					<div className="col-md-5 col-md-offset-4">
			    		<div className="panel panel-default">
						  	<div className="panel-heading">
						    	<h3 className="panel-title">Please sign in</h3>
						 	</div>
						  	<div className="panel-body">
						    	<form accept-charset="UTF-8" role="form">
			                    <fieldset>
						    	  	<div className="form-group">
						    		    <input className="form-control" ref="username" placeholder="Username" type="text" />
						    		</div>
						    		<div className="form-group">
						    		    <input className="form-control" ref="password" placeholder="Password" type="password" />
						    		</div>						    						    
						    		<div className="form-group">						    		
						    			<input className="btn btn-lg btn-success btn-block" onClick={this.login.bind(this)} type="button" value="Login" />
						    		</div>
						    		<Link id="register-link" className="pull-right" to="/register">Register</Link>
						    		<p className="text-center text-danger">{this.state.msg}</p>						    		
						    	</fieldset>					
						      	</form>
						    </div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	login(){
		const { username, password } = this.refs;
		superagent
			.post('/api/login')
			.send({ username: username.value, password: password.value })
			.end((err, res) => {			
				const { token, user, msg } = res.body;				

				if(user) {
					this.setState({ msg });
					const store = this.context.store;
					user.jwt = token;
					store.dispatch({ type: Actions.PUT_USER, payload: user });
					browserHistory.push('/game-listing');
				}
				else this.setState({ msg });			
			});
	}
}

Login.contextTypes = {
	store: React.PropTypes.object
};