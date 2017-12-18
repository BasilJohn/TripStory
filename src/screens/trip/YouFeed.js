import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { ListView, StyleSheet,FlatList } from "react-native";
import { fetchTripList } from "../../store/actions";
import TripList from "./ListItem";

class YouFeed extends React.Component {
  componentWillMount() {
    this.props.fetchTripList();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props
    //that this component will be
    //rendered with this.props is still the old
    //set of props.
    this.createDataSource(nextProps);
  }

  createDataSource({ tripList }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.dataSource = ds.cloneWithRows(tripList);
  }

  renderRow(trip) {
    return <TripList trip={trip} />;
  }
  render(props) {
    
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
});

const mapStateToProps = state => {
  const tripList = _.map(state.trip.tripList, (val, uid) => {
    return { ...val, uid };
  });

  return { tripList };
};
export default connect(mapStateToProps, { fetchTripList })(YouFeed);
