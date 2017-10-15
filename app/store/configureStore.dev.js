import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(middleware),
        )
    );
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}