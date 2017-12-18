import { Navigation } from 'react-native-navigation';
import PreAuthScreen from './src/screens/auth/preauth';
import LandingScreen from './src/screens/auth/landing';
import SignUpScreen from './src/screens/auth/SignUp';
import LoginScreen from './src/screens/auth/Login';
import AddTripScreen from './src/screens/trip/AddTrip';
import TripStoryScreen from './src/screens/trip/TripStory';
import MainFeedScreen from './src/screens/trip/MainFeed';
import YouFeedScreen from './src/screens/trip/YouFeed';
import NearYouFeedScreen from './src/screens/trip/NearYouFeed';
import WorldFeedScreen from './src/screens/trip/WorldFeed';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

//Register Screens
Navigation.registerComponent("trip-story.LandingScreen", () => LandingScreen, store, Provider);
Navigation.registerComponent("trip-story.PreAuthScreen", () => PreAuthScreen, store, Provider);
Navigation.registerComponent("trip-story.SignUpScreen", () => SignUpScreen, store, Provider);
Navigation.registerComponent("trip-story.LoginScreen", () => LoginScreen, store, Provider);
Navigation.registerComponent("trip-story.AddTripScreen", () => AddTripScreen, store, Provider);
Navigation.registerComponent("trip-story.TripStoryScreen", () => TripStoryScreen, store, Provider);
Navigation.registerComponent("trip-story.MainFeedScreen", () => MainFeedScreen, store, Provider);
Navigation.registerComponent("trip-story.YouFeedScreen", () => YouFeedScreen, store, Provider);
Navigation.registerComponent("trip-story.NearYouFeedScreen", () => NearYouFeedScreen, store, Provider);
Navigation.registerComponent("trip-story.WorldFeedScreen", () => WorldFeedScreen, store, Provider);
//Start a APP
Navigation.startSingleScreenApp({
  screen: {
    screen: "trip-story.LandingScreen",
    title: ""
  },
  appStyle: {
    navBarBackgroundColor: '#2D4262',
    navBarTextColor: '#F1F1F2',
    navBarButtonColor: '#F1F1F2',
  },
  animated: true,
  animationType: 'fade'
});

