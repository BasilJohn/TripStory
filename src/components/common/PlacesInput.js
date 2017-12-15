import React from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity, Modal, Text, TouchableHighlight } from 'react-native';
import { GooglePlacesInput } from './GooglePlacesInput';
import { updateSelectedPlace, showModal } from '../../actions';
import { connect } from 'react-redux';

const IMAGES = {
    start: require('./Images/GooglePlaces.png'),
    end: require('./Images/redtarget.png')
}

class PlacesInput extends React.Component {

    toggleModal(visible, source) {
        this.props.showModal(visible, source);
    }
    setSelectedPlace = (placeSelected) => {
         this.props.updateSelectedPlace(placeSelected, this.props.source, this.props.tripStartPlace, this.props.tripEndPlace);
    }

  
    render() {
 
        const { modalVisible,tripStartPlace, tripEndPlace,source } = this.props;
        const modalStatus = modalVisible ? true : false ;
          return (
            <View>
                <View style={styles.containerStyle}>
                    <Image style={styles.imageStyle} source={IMAGES['start']} />
                    <TouchableOpacity style={styles.touchStyle} onPress={() => { this.toggleModal(true, 'start') }}>
                        <TextInput
                            secureTextEntry={this.props.secureTextEntry}
                            autoCorrect={false}
                            placeholder={'Trip start place'}
                            value={tripStartPlace}
                            onChangeText={this.props.onChangeText}
                            pointerEvents="none"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerStyle}>
                    <Image style={styles.imageStyle} source={IMAGES['end']} />
                    <TouchableOpacity style={styles.touchStyle} onPress={() => { this.toggleModal(true, 'end') }}>
                        <TextInput
                            secureTextEntry={this.props.secureTextEntry}
                            autoCorrect={false}
                            placeholder={'Trip end place'}
                            value={tripEndPlace}
                            onChangeText={this.props.onChangeText}
                            pointerEvents="none"
                        />
                    </TouchableOpacity>
                </View>
                <Modal animationType={"slide"} transparent={false}
                    visible={modalStatus}
                    onRequestClose={() => { console.log('closed') }}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.closeStyle} onPress={() => { this.toggleModal(!modalStatus) }}>
                            <Text style={styles.textStyle} >Close</Text>
                        </TouchableOpacity>
                        <GooglePlacesInput setSelectedPlace={this.setSelectedPlace} source={source} />
                    </View>
                </Modal>
            </View>
        );
    }
};

const styles = StyleSheet.create({

    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 1,
        justifyContent: 'space-between'
    },
    touchStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 80,
        flex: 2,
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    inputStyle: {

        fontSize: 18,
        lineHeight: 23

    },
    imageStyle: {
        height: 100,
        flex: 1,
        width: 50,
        alignSelf: 'center',
        backgroundColor: '#F1F1F2'
    },
    modal: {
        flex: 1,
        paddingTop: 25,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#2D4262'
    },
    closeStyle: {
        alignItems: 'flex-end',
        marginBottom: 15
    },
    textStyle: {
        color: '#F1F1F2',
        fontSize: 16,
        fontWeight: 'bold'
    }

});

mapStateToProps = ({ trip }) => {
    const { tripStartPlace, tripEndPlace, selectedPlace, modalVisible, source } = trip;
    return {
        tripStartPlace,
        tripEndPlace,
        selectedPlace,
        modalVisible,
        source
    }
}

export default connect(mapStateToProps, { updateSelectedPlace, showModal })(PlacesInput)
