import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { Button, Input, Spinner, Block, BlockDetail, NavigationLink } from "../../components/common";
import { onEmailChanged, onPasswordChanged, onLoginUser, setNavigationProps,loadUserInformation } from "../../store/actions";
import MainFeed from "../trip/MainFeed";
import firebase from "firebase";
import { connect } from "react-redux";

class Login extends React.Component {
  state = { loggedIn: false };

  onEmailChange(text) {
    this.props.onEmailChanged(text);
  }
  onPasswordChange(text) {
    this.props.onPasswordChanged(text);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
        this.props.loadUserInformation();
        this.props.navigator.setTitle({
          title: "Trip List"
        });
        this.props.navigator.setButtons({
          rightButtons: [
            {
              title: 'Add Trip',
              id: 'addTrip',
              buttonColor: '#F1F1F2',
              buttonFontSize: 30,
              buttonFontWeight: '800',
            }
          ],
          animated: true
        });

      } else {
        this.setState({ loggedIn: false });
        this.props.navigator.setTitle({
          title: "Login"
        });
      }
    });

    this.props.setNavigationProps(this.props.navigator);
  }

  onLoginButtonPress() {
    const { email, password } = this.props;
    this.props.onLoginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button
        onPress={this.onLoginButtonPress.bind(this)}
        buttonText={"Login"}
      />
    );
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <MainFeed />;
      case false:
        return (
          <ScrollView contentContainerStyle={styles.loginStyle}>
            <KeyboardAvoidingView behavior="padding">
              <Block>
                <BlockDetail>
                  <Input
                    placeholder={""}
                    inputText={"Email"}
                    value={this.props.email}
                    onChangeText={this.onEmailChange.bind(this)}
                  />
                  <Input
                    secureTextEntry
                    placeholder={""}
                    inputText={"Password"}
                    value={this.props.password}
                    onChangeText={this.onPasswordChange.bind(this)}
                  />
                  <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                  <View>{this.renderButton()}</View>
                </BlockDetail>
              </Block>
            </KeyboardAvoidingView>
          </ScrollView>
        );
      default:
        return <Spinner />;
    }
  }
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'addTrip') {
        this.props.navigator.push({
          screen: 'trip-story.AddTripScreen',
          title: 'Add Trip'
      });
      }

    }
  }
  render(props) {
    
    return (
      <View style={styles.contentContainerStyle}>{this.renderContent()}</View>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    color: "red",
    alignSelf: "center",
    fontSize: 20
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  loginStyle: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

const mapStateToProps = ({ auth }, ownProps) => {
  const { navigator } = ownProps;

  const { email, password, error, loading } = auth;

  return {
    email,
    password,
    error,
    loading,
    navigator
  };
};

export default connect(mapStateToProps, {
  onEmailChanged,
  onPasswordChanged,
  onLoginUser,
  setNavigationProps,
  loadUserInformation
})(Login);
