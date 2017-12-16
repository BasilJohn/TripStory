import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TripReducer from './TripReducer';
import NavigationReducer from './NavigationReducer';

export default combineReducers({
    auth: AuthReducer,
    trip: TripReducer,
    navigation : NavigationReducer
});