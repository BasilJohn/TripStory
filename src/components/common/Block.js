import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Block = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({

    containerStyle: {
        flex: 1
    }

});

export { Block };
