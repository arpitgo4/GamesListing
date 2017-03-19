import React from 'react';
import { Link, browserHistory } from 'react-router';

import superagent from 'superagent';
import Actions from '../../reducers/actions';

export default class Register extends React.Component {

	constructor(props){
		super(props);
		this.state = { msg: '' };
	}

	render() {
		return (
			<div id="register-form-container" className="container">
			    <div className="row">
					<div className="col-md-5 col-md-offset-4">
			    		<div className="panel panel-default">
						  	<div className="panel-heading">
						    	<h3 className="panel-title">Register</h3>
						 	</div>
						  	<div className="panel-body">
						    	<form accept-charset="UTF-8" role="form">
			                    <fieldset>
									<div className="form-group">
						    		    <input className="form-control" ref="firstname" placeholder="First Name" type="text" />
						    		</div>
						    		<div className="form-group">
						    			<input className="form-control" ref="lastname" placeholder="Last Name" type="text" />
						    		</div>				                    
						    	  	<div className="form-group">
						    		    <input className="form-control" ref="username" placeholder="Username" name="email" type="text" />
						    		</div>
						    		<div className="form-group">
						    		    <input className="form-control" ref="password" placeholder="Password" type="password" />
						    		</div>				    	
						    		<div className="form-group">						    		
						    			<input className="btn btn-lg btn-block" style={{ backgroundColor: '#84BB41' }}  onClick={this.register.bind(this)} type="button" value="Register" />
						    		</div>		
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

	register(){

		const { firstname, lastname, username, password } = this.refs;
		superagent
			.post('/api/register')
			.send({ firstname: firstname.value, lastname: lastname.value, 
				username: username.value, password: password.value })
			.end((err, res) => {
				const { msg, user } = res.body;
				if(user){
					const store = this.context.store;
					superagent
						.post('/api/login')
						.send({ username: username.value, password: password.value })
						.end((err, res) => {
							const { user, token } = res.body;
							user.jwt = token;
							store.dispatch({ type: Actions.PUT_USER, payload: user });
							browserHistory.push('/game-listing');
						});						
				}
				this.setState({ msg });
			});
	}
}

Register.contextTypes = {
	store: React.PropTypes.object
};