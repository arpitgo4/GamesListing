import React from 'react';
import { Link } from 'react-router';

export default class Register extends React.Component {

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
						    		    <input className="form-control" placeholder="First Name" type="text" />
						    		</div>
						    		<div className="form-group">
						    			<input className="form-control" placeholder="Last Name" type="text" />
						    		</div>				                    
						    	  	<div className="form-group">
						    		    <input className="form-control" placeholder="Username" name="email" type="text" />
						    		</div>
						    		<div className="form-group">
						    			<input className="form-control" placeholder="Password" name="password" type="password" value="" />
						    		</div>				    	
						    		<div className="form-group">						    		
						    			<input className="btn btn-lg btn-success btn-block" type="button" value="Register" />
						    		</div>						    		
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