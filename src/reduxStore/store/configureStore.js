import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import globalSagas from '../sagas';
import globalReducers from '../reducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// mount it on the Store
const store = createStore(
  globalReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(globalSagas)

export default store;
