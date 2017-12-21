import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { Navigation } from 'react-native-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

// function createIconButton(IconFont) {
//     return function IconButton({ onPress, name, size, ...props }) {
//         return (
//             <TouchableOpacity onPress={onPress} {...props}>
//                 <IconFont name={name} size={size} />
//             </TouchableOpacity>
//         )
//     }
// }

const AddIcon = () =>
    <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('pressed me!')}>
        <View style={styles.button}>
            <Ionicons name={"md-add-circle"} color={"#F1F1F2"} size={30} />
        </View>
    </TouchableOpacity>;

//Navigation.registerComponent('Ionicons', () => createIconButton(Ionicons))
Navigation.registerComponent('AddIcon', () => AddIcon)
class TripStory extends React.Component {

    componentDidMount() {
        this.props.navigator.setButtons({
            rightButtons: [
                {
                    // component: 'Ionicons',
                    // passProps: {
                    //     name: 'md-add-circle',
                    //     size: 30,
                    //     color: 'white',
                    //     onPress: this.handlePressSettings,
                    // },
                    id: 'add-button',
                    component: 'AddIcon', // This line loads our component as a nav bar button item
                    passProps: {
                        text: 'Hi!',
                    },
                }
            ],
            animated: true
        });
    }
    handlePressSettings = () => {
        alert('Pressed settings!')
    }

    render(props) {
       
        return (
            <View>
                <Text></Text>
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
});

const mapStateToProps = ({ navigation }, ownProps) => {
    const { navigator } = ownProps;

    return {
        navigator
    };
};

export default connect(mapStateToProps, {})(TripStory);
