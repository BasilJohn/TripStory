import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextArea = (props) => {
    return (
        <View style={styles.containerStyle}>
            <TextInput underlineColorAndroid="transparent"
                secureTextEntry={props.secureTextEntry}
                autoCorrect={false}
                placeholder={"Every picture has a story,write something here !!!"}
                value={props.value}
                onChangeText={props.onChangeText}
                style={styles.inputStyle}
                multiline={true}
                numberOfLines={10}
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 0,
        paddingLeft: 0,
        fontSize: 18,
        flex: 1
    },
       containerStyle: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
        borderTopWidth: 1
    }
});


export { TextArea };