import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Footer, Button } from "../../components/common";
import YouFeed from "../trip/YouFeed";
import NearYouFeed from "../trip/NearYouFeed";
import WorldFeed from "../trip/WorldFeed";
import { connect } from "react-redux";
import { loadUserInformation } from "../../store/actions";
import _ from "lodash";

class MainFeed extends React.Component {
  state = { screenToShow: "", ready: false };

  updateScreenToShow = text => {
    this.setState({
      screenToShow: ""
    });
    this.setState({
      screenToShow: text
    });
  };
  renderChildView() {
    switch (this.state.screenToShow) {
      case "You":
        return <YouFeed />;
      case "NearYou":
        return <NearYouFeed />;
      case "World":
        return <WorldFeed />;
      default:
        return <YouFeed />;
    }
  }

  componentWillMount() {
    this.setState({ ready: false });
    this.props.loadUserInformation();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ready: !nextProps.isLoading });
  }

  render(props) {
    if (this.state.ready) {

      return (
        <View style={styles.containerStyle}>
          <View style={styles.contentStyle}>{this.renderChildView()}</View>
          <View>
            <Footer userDetails={this.props.loginDetails} updateScreenToShow={this.updateScreenToShow} />
          </View>
        </View>
      );

    }
    else {
      return (
        <View style={styles.containerStyle}>
          <Text>...Loading</Text>
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#F1F1F2"
  },
  contentStyle: {
    flex: 1
  }
});

const mapStateToProps = ({ auth, ui }) => {
  const { userInformation } = auth;
  const { isLoading } = ui;
  const userInfo = _.map(userInformation, (val, uid) => {
    return { ...val, uid };
  });
  const loginDetails = userInfo[0];
  return { loginDetails };
}

export default connect(mapStateToProps, { loadUserInformation })(MainFeed)
