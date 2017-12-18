import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import TripReducer from './reducers/TripReducer';
import NavigationReducer from './reducers/NavigationReducer';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: AuthReducer,
    trip: TripReducer,
    navigator: NavigationReducer
});

let composeEnhancers = compose;
if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

}
const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk)));
};


export default configureStore;