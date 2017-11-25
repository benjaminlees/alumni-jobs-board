import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';
import App from './containers/App/App.component';

const store = configureStore();

render(
    <AppContainer>
        <App store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const newConfigureStore = require('./store/configureStore');
        const newStore = newConfigureStore.configureStore();
        const newHistory = newConfigureStore.history;
        const NewApp = require('./containers/App/App.component').default;
        render(
            <AppContainer>
                <NewApp store={newStore} history={newHistory} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}