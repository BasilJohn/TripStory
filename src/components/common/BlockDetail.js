import React from 'react';
import { View, StyleSheet } from 'react-native';

const BlockDetail = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({

    containerStyle: {
        borderColor: '#9b9b9d'
    }

});

export { BlockDetail };