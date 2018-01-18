import { 
     UPDATE_SELECTED_PLACE,
     SHOW_MODAL,
     SHOW_TRIP_LIST,
     TRIPS_FETCH_SUCCESS,
     ON_STORY_IMAGE_PICKED,
     ON_STORY_TEXT_CHANGED,
     SET_TRIP_ID,
     SHOW_TRIP_STORY_LIST,
     STORIES_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = { tripStartPlace:'' , 
                        tripEndPlace: '',
                        tripAdded :false ,
                        selectedPlace: '' , 
                        modalVisible: false,
                        tripList: {},
                        source:'',storyImage:null,
                        storyText:'',
                        tripId:'',
                        storyList:{}  }
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
        case ON_STORY_IMAGE_PICKED:
        return { ...state, storyImage: action.payload }
        case ON_STORY_TEXT_CHANGED:
        return { ...state, storyText: action.payload }
        case SET_TRIP_ID:
        return { ...state, tripId: action.payload }
        case SHOW_TRIP_STORY_LIST:
        return { ...state, tripId: action.payload }
        case STORIES_FETCH_SUCCESS:
        return { ...state, storyList: action.payload }
        default:
        return state;
    }
}