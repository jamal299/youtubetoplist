import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../src/reducer/reducers'

export const store = createStore(reducers,applyMiddleware(thunk));