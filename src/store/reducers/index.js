import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TripReducer from './TripReducer';
import NavigationReducer from './NavigationReducer';
import UIReducer from './UIReducer';

export default combineReducers({
    auth: AuthReducer,
    trip: TripReducer,
    navigation : NavigationReducer,
    ui: UIReducer
});