import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { connect } from "react-redux";
import { Navigation } from 'react-native-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { showModal } from '../../store/actions/index';

// function createIconButton(IconFont) {
//     return function IconButton({ onPress, name, size, ...props }) {
//         return (
//             <TouchableOpacity onPress={onPress} {...props}>
//                 <IconFont name={name} size={size} />
//             </TouchableOpacity>
//         )
//     }
// }

const AddIcon = ({ onPress, name, size, ...props }) =>
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <View style={styles.button}>
            <Ionicons name={name} color={"#F1F1F2"} size={size} />
        </View>
    </TouchableOpacity>;

Navigation.registerComponent('AddIcon', () => AddIcon)
class TripStory extends React.Component {

    state = { showModal: false };

    componentDidMount() {
        this.props.navigator.setButtons({
            rightButtons: [
                {

                    id: 'add-button',
                    component: 'AddIcon', // This line loads our component as a nav bar button item
                    passProps: {
                        name: 'md-add-circle',
                        size: 30,
                        color: 'white',
                        onPress: this.handlePressSettings,
                    }
                }
            ],
            animated: true
        });
    }
    handlePressSettings = () => {
        this.setState({ showModal: true });
    }

    toggleModal = () => {
        this.setState({ showModal: false });
    }

    render() {

        const modalStatus = this.state.showModal ? true : false;

        return (
            <View>
                <Text>TripStory</Text>
                <Modal animationType={"slide"} transparent={false}
                    visible={modalStatus}
                    onRequestClose={() => { console.log('closed') }}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.closeStyle} onPress={this.toggleModal}>
                            <Ionicons style={styles.button} color={"#F1F1F2"} name="md-close-circle" size={30} />
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        overflow: 'hidden',
        width: 34,
        height: 34,
        borderRadius: 34 / 2,
        justifyContent: 'center',
        alignItems: 'center',
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

const mapStateToProps = ({ navigation }, ownProps) => {
    const { navigator } = ownProps;

    return {
        navigator
    };
};

export default connect(mapStateToProps, {})(TripStory);
