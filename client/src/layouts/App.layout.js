import React from 'react';

import { Provider } from 'react-redux';
import superagent from 'superagent';
import configureStore from '../config/store.config';
import Actions from '../reducers/actions';

import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';

export default class AppLayout extends React.Component {
	render(){
		return (
			<Provider store={configureStore({ initialState: {} })}>
                <div id="app-container" className="container-fluid">
                    <Header />        
                	{this.props.children}
                </div>
            </Provider>
		);
	}
}

AppLayout.contextTypes = {
    store: React.PropTypes.object
};