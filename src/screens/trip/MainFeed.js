import React from "react";
import {  View,  Text,  ScrollView,  StyleSheet,  TouchableOpacity} from "react-native";
import { Footer, Button } from "../../components/common";
import YouFeed from "../trip/YouFeed";
import NearYouFeed from "../trip/NearYouFeed";
import WorldFeed from "../trip/WorldFeed";
import { connect } from "react-redux";

export default class SignUp extends React.Component {
  state = { screenToShow: "" };

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

  render(props) {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.contentStyle}>{this.renderChildView()}</View>
        <View>
          <Footer updateScreenToShow={this.updateScreenToShow} />
        </View>
      </View>
    );
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

