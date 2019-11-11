import { createStore, combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import cakeReducer from './reducer/cake';
import iceCreamReducer from './reducer/iceCream';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store;