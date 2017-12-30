import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class TripDetail extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text>Trip Detail</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        flex:1,
        marginTop:20,
        backgroundColor: '#F1F1F2',
        
    }
});
