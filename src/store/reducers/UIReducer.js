import { UI_START_LOADING, UI_STOP_LOADING } from '../actions/types'

const INITIAL_STATE={
    isLoading:false
};

const reducer= (state=INITIAL_STATE,action)=>{
  switch(action.type){
      case UI_START_LOADING:
      return { ...state,isLoading:action.payload}
      case UI_STOP_LOADING:
      return { ...state,isLoading:action.payload}
      default:
      return state;

  }
};

export default reducer;