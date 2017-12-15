import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{props.inputText}</Text>
            <TextInput
                secureTextEntry={props.secureTextEntry}
                autoCorrect={false}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChangeText}
                style={styles.inputStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#9b9b9d',
        borderBottomWidth: 1
    }
});



export { Input };