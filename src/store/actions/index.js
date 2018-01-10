import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAIL,
  UPDATE_SELECTED_PLACE,
  SHOW_MODAL,
  TRIPS_FETCH_SUCCESS,
  SHOW_TRIP_LIST,
  SET_NAVIGATION_PROPS,
  ON_IMAGE_PICKED,
  LOAD_USER_INFORMATION,
  UI_START_LOADING,
  UI_STOP_LOADING,
  ON_STORY_IMAGE_PICKED,
  ON_STORY_TEXT_CHANGED
} from "./types";

import firebase from "firebase";

export const onEmailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const onPasswordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const onLoginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

export const onSignUpTextChanged = (prop, value) => {
  return {
    type: prop,
    payload: value
  };
};

export const onSignUpUser = ({ email, password, username, fullname, profileImage }) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => signUpUserSuccess(dispatch, user, username, fullname, profileImage))
      .catch(() => loginUserFail(dispatch));
  };
};

const signUpUserSuccess = (dispatch, user, username, fullname, profileImage) => {
  const { currentUser } = firebase.auth();
  fetch("https://us-central1-tripping-22ff3.cloudfunctions.net/storeImage", {
    method: "POST",
    body: JSON.stringify({
      image: profileImage.base64
    })
  }).catch(err => console.log(err)).
    then(res => res.json()).
    then(parsedRes => {
      firebase
        .database()
        .ref(`/Users/${currentUser.uid}/User`)
        .push({ username: username, fullname: fullname, image: parsedRes.imageUrl })
    })
  // .catch(err => console.log(err)).
  // then(res => res.json()).
  // then(parsedRes => {
  //   console.log(parsedRes);
  // });

  dispatch({ type: LOGIN_USER_SUCESS, payload: user });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCESS, payload: user });
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

export const updateSelectedPlace = (placeSelected, source, sp, ep) => {
  return {
    type: UPDATE_SELECTED_PLACE,
    tripStartPlace: source === "start" ? placeSelected : sp,
    tripEndPlace: source === "end" ? placeSelected : ep,
    source: source
  };
};
export const showModal = (visible, source) => {
  return {
    type: SHOW_MODAL,
    payload: visible,
    placeSource: source
  };
};

export const onAddTrip = (tripStartPlace, tripEndPlace) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/Trips/${currentUser.uid}/UserTrips`)
      .push({ tripStartPlace, tripEndPlace })
      .then(() => {
        dispatch({ type: SHOW_TRIP_LIST, payload: true });
      });
  };
};

export const fetchTripList = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/Trips/${currentUser.uid}/UserTrips`)
      .on("value", snapshot => {
        dispatch({ type: TRIPS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const setNavigationProps = navigationProps => {
  return {
    type: SET_NAVIGATION_PROPS,
    payload: navigationProps
  };
};

export const onImagePicked = image => {
  return {
    type: ON_IMAGE_PICKED,
    payload: image
  };
};

export const loadUserInformation = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    dispatch({ type: UI_START_LOADING });
    firebase
      .database()
      .ref(`/Users/${currentUser.uid}/User`)
      .on("value", snapshot => {
        dispatch({ type: UI_STOP_LOADING });
        dispatch({ type: LOAD_USER_INFORMATION, payload: snapshot.val() });
      });
  };
};

export const onStoryImagePicked = image => {
  return {
    type: ON_STORY_IMAGE_PICKED,
    payload: image
  };
};

export const onStoryTextChanged = value => {
  return {
    type: ON_STORY_TEXT_CHANGED,
    payload: value
  };
};