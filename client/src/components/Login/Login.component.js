import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
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
						    		    <input className="form-control" placeholder="Username" name="email" type="text" />
						    		</div>
						    		<div className="form-group">
						    			<input className="form-control" placeholder="Password" name="password" type="password" value="" />
						    		</div>				    	
						    		<div className="form-group">						    		
						    			<input className="btn btn-lg btn-success btn-block" type="button" value="Login" />
						    		</div>
						    		<Link id="register-link" className="pull-right" to="/register">Register</Link>						    		
						    	</fieldset>					
						      	</form>
						    </div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}