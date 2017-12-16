import React from 'react';
import { View, Text } from 'react-native';

export default class TripStory extends React.Component {

    static navigationOptions = {
        title: 'Trip Story',
        headerTintColor: '#F1F1F2',
        headerTitleStyle: { color: '#F1F1F2' }

    };

    render() {
        return (
            <View>
                <Text>{'TripStory'}</Text>
            </View>
        )
    }
}