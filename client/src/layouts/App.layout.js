import React from 'react';

import { Provider } from 'react-redux';
import superagent from 'superagent';
import configureStore from '../config/store.config';
import Actions from '../reducers/actions';

export default class AppLayout extends React.Component {

    /*componentWillMount(){
        superagent
            .get('/api/games')
            .end((err, res) => this.context.store.dispatch({ 
                action: Actions.ADD_GAMES,
                data: res.body 
            }));
    }*/

	render(){
		return (
			<Provider store={configureStore({ initialState: {} })}>
                <div id="app-container" className="container-fluid">
                              
                	{this.props.children}
                	
                </div>
            </Provider>
		);
	}
}

AppLayout.contextTypes = {
    store: React.PropTypes.object
};