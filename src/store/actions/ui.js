import {
    UI_START_LOADING, UI_STOP_LOADING
} from "./types";

export const uiStartLoading = () => {
    return {
        type: UI_START_LOADING,payload:true
    };
};

export const uiStopLoading = () => {
    return {
        type: UI_STOP_LOADING,payload:false
    };
};