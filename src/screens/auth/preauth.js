import React from 'react';
import { Button, Block, BlockDetail } from '../../components/common';
import { View, Text, StyleSheet } from 'react-native';

export default class Initial extends React.Component {

    render(props) {
      
        return (

            <View style={styles.parentStyle}>
                <View style={styles.childStyle}>
                    <Button onPress={() => alert("SignUp")} buttonText={'Sign Up'} />
                </View>
                <View style={styles.childStyle} >
                    <Button onPress={() => alert("Login")} buttonText={'Login'} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    parentStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1F1F2'
    },
    childStyle: {
        alignSelf: 'stretch',
        paddingTop: 5
    }
});

