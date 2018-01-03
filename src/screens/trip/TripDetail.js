import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImageHolder } from '../../components/common';


export default class TripDetail extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <ImageHolder/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        flex:1,
        marginTop:20,
        justifyContent:'space-between',
        backgroundColor: '#F1F1F2',
        
    }
});
