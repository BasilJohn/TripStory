import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/auth/auth';
import LandingScreen from './src/screens/auth/landing';

//Register Screens
Navigation.registerComponent("trip-story.LandingScreen",()=>LandingScreen);

//Start a APP
Navigation.startSingleScreenApp({
  screen:{
    screen:"trip-story.LandingScreen",
    title:"Login"
  }
});

