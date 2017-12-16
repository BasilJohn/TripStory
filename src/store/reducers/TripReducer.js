import { 
     UPDATE_SELECTED_PLACE,
     SHOW_MODAL,
     SHOW_TRIP_LIST,
     TRIPS_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = { tripStartPlace:'' , 
                        tripEndPlace: '',
                        tripAdded :false ,
                        selectedPlace: '' , 
                        modalVisible: false,
                        tripList: {},
                        source:'' }
export default (state = INITIAL_STATE ,action ) =>{
  
    switch (action.type){
        case UPDATE_SELECTED_PLACE:
        return { ...state, tripStartPlace : action.tripStartPlace, tripEndPlace:action.tripEndPlace, modalVisible:false }
        case SHOW_MODAL:
        return { ...state, modalVisible:action.payload , source:action.placeSource  }
        case SHOW_TRIP_LIST :
        return { ...state ,tripAdded : action.payload }
        case TRIPS_FETCH_SUCCESS :
        return { tripList: action.payload }
        default:
        return state;
    }
}