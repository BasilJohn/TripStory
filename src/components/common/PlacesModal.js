import React from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { showModal, updateSelectedPlace } from '../../actions';
import { GooglePlacesInput } from '../common';

class PlacesModal extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.modalVisible !== nextProps.modalVisible) {
           
            this.props.showModal(true,'')
        }
        else{
            this.props.showModal(false,'')
        }
    }

    setSelectedPlace = (placeSelected) => {
        this.props.updateSelectedPlace(placeSelected, this.props.source, this.props.tripStartPlace, this.props.tripEndPlace);
    }

    render() {

        return (
            <Modal animationType={"slide"} transparent={false}
                visible={this.props.modalVisible}
                onRequestClose={() => { console.log('closed') }}>
                <View style={styles.modal}>
                    <TouchableOpacity style={styles.closeStyle} onPress={() => { this.toggleModal(!this.props.modalVisible) }}>
                        <Text style={styles.textStyle} >Close</Text>
                    </TouchableOpacity>
                    <GooglePlacesInput setSelectedPlace={this.setSelectedPlace} />
                </View>
            </Modal>
        );
    }
}


const styles = StyleSheet.create({

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


export default connect(mapStateToProps, { showModal, updateSelectedPlace })(PlacesModal);