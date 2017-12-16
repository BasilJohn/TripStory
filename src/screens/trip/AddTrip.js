import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import { Input, Button, BlockDetail } from '../common';
import PlacesInput from '../common/PlacesInput';
import { updateSelectedPlace, onAddTrip } from '../../actions';
import { connect } from 'react-redux';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0
class AddTrip extends React.Component {

    static navigationOptions = {
        title: 'Add Trip',
        headerTintColor: '#F1F1F2',
        headerTitleStyle: { color: '#F1F1F2' }

    };

    addTrip() {
        this.props.onAddTrip(this.props.tripStartPlace, this.props.tripEndPlace);
        this.props.navigation.goBack(null);
    }

    render(props) {
        return (
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset}>
                    <View style={styles.HeaderTextStyle}>
                        <Text style={styles.labelStyle}>{'Add your Trip details here'}</Text>
                    </View>
                    <BlockDetail>
                        <PlacesInput />
                    </BlockDetail>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior="position">
                    <Button buttonText={'Create Trip'} onPress={this.addTrip.bind(this)} />
                </KeyboardAvoidingView>
            </ScrollView>

        );

    }

}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F1F1F2',
    },
    labelStyle: {
        fontSize: 20,
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2D4262'
    },
    HeaderTextStyle: {

        padding: 10,
        paddingBottom: 100

    }
});

mapStateToProps = ({ trip }) => {

    const { tripStartPlace, tripEndPlace, selectedPlace, tripAdded } = trip;
    return {
        tripStartPlace,
        tripEndPlace,
        selectedPlace,
        tripAdded
    }

}

export default connect(mapStateToProps, { onAddTrip })(AddTrip)