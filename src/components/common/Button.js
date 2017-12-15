import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle} >{props.buttonText}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({

    buttonStyle: {

        alignSelf: 'stretch',
        backgroundColor: '#2D4262',
        height:50

    },
    textStyle: {
        alignSelf: 'center',
        textAlign:'center',
        color: '#F1F1F2',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }

});


 export { Button };