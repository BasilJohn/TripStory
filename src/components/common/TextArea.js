import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextArea = (props) => {
    return (
        <View style={styles.containerStyle}>
            <TextInput underlineColorAndroid="transparent"
                secureTextEntry={props.secureTextEntry}
                autoCorrect={true}
                placeholder={"Every picture has a story,write something here !!!"}
                value={props.value}
                onChangeText={props.onChangeText}
                multiline={true}
                numberOfLines={10}
                keyboardAppearance={"light"}
                maxLength={200}
                editable={true}
                style={styles.inputStyle}
                
            />
       
        </View>
    );
};

const styles = StyleSheet.create({
       containerStyle: {
        borderTopColor: '#000000',
        borderTopWidth: 1 
    },
    inputStyle:{
        textAlign: 'left',
        fontSize:20,
        height:'100%'
    }
});


export { TextArea };