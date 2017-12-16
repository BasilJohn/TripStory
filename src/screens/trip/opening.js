import React from 'react';
import { Text, StyleSheet, Image, ScrollView, View } from 'react-native';
import { Button, Block, BlockDetail } from './common';
import { StackNavigator } from 'react-navigation';
import InitialScreen from './Identity/Initial';
import SignUpScreen from './Identity/SignUp';
import LoginScreen from './Identity/Login';
import FeedScreen from './Initial/MainFeed';
import AddTripScreen from './Trip/AddTrip';

class Opening extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
    headerTintColor: '#F1F1F2',
    headerTitleStyle: { color: '#F1F1F2' }
  };

  render(props) {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View>
          <BlockDetail>
            <Image style={styles.introImageStyle} source={require('../images/IntroImage.jpg')} />
          </BlockDetail>
          <BlockDetail>
            <Text >Hey,{"\n"}
              {"\n"}
              Welcome to Tripping,here's what you can do using Tripping.{"\n"}
              {"\n"}
              1)Create your own Trip Group,add friends participating in the Trip and share all information.{"\n"}
              {"\n"}
              2)Track expense from all members of your Trip and be on track with finances.{"\n"}
              {"\n"}
              3)You can locate all members of your Trip group individually using our Tracker.{"\n"}
              {"\n"}
              4)Discover other groups Tripping.
            </Text>
          </BlockDetail>
        </View>
        <View>
          <BlockDetail>
            <Button onPress={() => this.props.navigation.navigate('Initial')} buttonText={'Get Started'} />
          </BlockDetail>
        </View>
      </ScrollView>
    );
  }
}

const Stacks = StackNavigator({
  Opening: {
    screen: Opening
  },
  Initial: {
    screen: InitialScreen
  },
  SignUp: {
    screen: SignUpScreen
  },
  Login: {
    screen: LoginScreen
  },
  MainFeed: {
    screen: FeedScreen
  },
  AddTrip: {
    screen: AddTripScreen
  }
});


export default class App extends React.Component {
  render() {
    return (
      <Stacks style={styles.stackStyle} />
    );
  }
}


const styles = StyleSheet.create({

  introImageStyle: {
    height: 160,
    flex: 1,
    width: null

  },
  stackStyle: {
    backgroundColor: '#2D4262'

  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F2'
  }

});

