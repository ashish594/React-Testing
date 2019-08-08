import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// import ReduxPromise from 'redux-promise';   --reduxPromise is commented because we crated custom promise middleware called async.js
import Async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';

export default ({children, initialState = {}}) => {
    const store = createStore(reducers,
        initialState,
        applyMiddleware(Async, stateValidator)
    );
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
