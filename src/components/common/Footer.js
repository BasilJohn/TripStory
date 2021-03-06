import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default class Footer extends React.Component {

    handlePress = (text) => {
        this.props.updateScreenToShow(text);
    }

    render(props) {
        const { image } = this.props.userDetails;
       
      
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={this.handlePress.bind(this, 'You')} style={styles.buttonStyle}>
                <Image resizeMode="cover"  borderRadius={30} style={styles.footerImageStyle} source={{uri:image}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handlePress.bind(this, 'NearYou')} style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>{'Near You'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handlePress.bind(this, 'World')} style={styles.buttonStyle}>
                    <Image style={styles.footerImageStyle} source={require('../../assets/Globe_Atlantic.png')} />
                </TouchableOpacity>

            </View>
        );
    }
};

const styles = StyleSheet.create({

    containerStyle: {
        flexDirection: 'row',
        paddingBottom: 1,
        justifyContent: 'space-between',
        backgroundColor: '#2D4262'
    },
    buttonStyle: {
        width: 100,
        height: 50,
        paddingTop: 3
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
    footerImageStyle: {
        height: 20,
        flex: 1,
        width: 50,
        alignSelf: 'center'

    }
});

export { Footer };
