import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImageHolder,TextArea, Button } from '../../components/common';


export default class TripDetail extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
             <View style={styles.imageHolder}>
                <ImageHolder/>
                </View>
                <View style={styles.textArea}>
                <TextArea/>
                </View>
                <View style={styles.footer}>
                 <Button buttonText={'Add'}/>
                </View>    
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
    },
    imageHolder:{
        flex:3
    },
    textArea:{
        flex:1
    },
    footer:{
        flex:1,
        justifyContent:'flex-end'
    }
});
