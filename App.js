import { Navigation } from 'react-native-navigation';
import PreAuthScreen from './src/screens/auth/preauth';
import LandingScreen from './src/screens/auth/landing';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

//Register Screens
Navigation.registerComponent("trip-story.LandingScreen", () => LandingScreen, store, Provider);
Navigation.registerComponent("trip-story.PreAuthScreen", () => PreAuthScreen, store, Provider);

//Start a APP
Navigation.startSingleScreenApp({
  screen: {
    screen: "trip-story.LandingScreen",
    title: ""
  }
});

