import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/index';
import ReduxThunk from 'redux-thunk';

export const middleware = [ReduxThunk];

export const createStoreWithMiddleWare = applyMiddleWare(...middleware)(createStore);

export const store = createStoreWithMiddleWare(RootReducer);