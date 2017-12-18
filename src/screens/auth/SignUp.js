import React from 'react';
import {
    View, Text, ScrollView,
    StyleSheet, TouchableOpacity,
    Image, KeyboardAvoidingView,
    Platform, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import { Block, BlockDetail, Button, Input, Spinner } from '../../components/common';
import { onSignUpTextChanged, onSignUpUser, onImagePicked } from '../../store/actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';

const keyboardVerticalOffset = 200;
class SignUp extends React.Component {

    state = {
        pickedImage: null
    }

    pickedImageHandler = () => {

        ImagePicker.showImagePicker({
            title: "Pick an Image"
        },
            res => {
                if (res.didCancel) {
                    // console.log("Cancel")
                } else if (res.error) {
                    // console.log("error")
                } else {
                    this.setState({
                        pickedImage: { uri: res.uri }
                    });
                    this.props.onImagePicked({ uri: res.uri, base64: res.data })
                }
            }
        );
    }

    onPressButton() {
        const { email, password, username, fullname, profileImage } = this.props;
        this.props.onSignUpUser({ email, password, username, fullname, profileImage });

    }

    renderButton() {
        if (this.props.isLoading) {
            return <Spinner />;
        }
        return (<Button
            onPress={this.onPressButton.bind(this)}
            buttonText={'Create Profile'} />);
    }

    onSignUpTextChange(prop, value) {

        this.props.onSignUpTextChanged(prop, value);
    }

    render(props) {

        return (
            // <View style={styles.signUpStyle}>
            <KeyboardAvoidingView behavior="padding" style={styles.signUpStyle} >
                <View style={styles.contentContainerStyle}>
                    <View >
                        <BlockDetail>
                            <TouchableOpacity style={styles.buttonStyle} onPress={this.pickedImageHandler}>
                                <Image
                                    style={styles.introImageStyle}
                                    source={this.state.pickedImage}
                                />
                            </TouchableOpacity>
                        </BlockDetail>
                    </View>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>

                            <BlockDetail>
                                <Input
                                    placeholder={''}
                                    inputText={'Email'}
                                    value={this.props.email}
                                    onChangeText={this.onSignUpTextChange.bind(this, 'email_changed')} />
                                <Input
                                    secureTextEntry
                                    placeholder={''}
                                    inputText={'Password'}
                                    value={this.props.password}
                                    onChangeText={this.onSignUpTextChange.bind(this, 'password_changed')} />
                                <Input
                                    placeholder={''}
                                    inputText={'Username'}
                                    value={this.props.username}
                                    onChangeText={this.onSignUpTextChange.bind(this, 'username_changed')} />
                                <Input
                                    placeholder={''}
                                    inputText={'Fullname'}
                                    value={this.props.fullname}
                                    onChangeText={this.onSignUpTextChange.bind(this, 'fullname_changed')} />
                                <Text style={styles.errorTextStyle}>
                                    {this.props.error}
                                </Text>
                            </BlockDetail>
                        </View>
                    </TouchableWithoutFeedback>
                    <View >
                        {this.renderButton()}
                    </View>
                </View>
            </KeyboardAvoidingView>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff"
    },
    buttonStyle: {
        borderColor: '#ddd',
        borderBottomWidth: 0,
        backgroundColor: '#F1F1F2',
        height: 160,

    },
    introImageStyle: {
        flex: 1,
        alignSelf: 'center',
        width: 80,
        height: undefined,
        backgroundColor: '#F1F1F2'
    },
    errorTextStyle: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 20,
    },
    signUpStyle: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    }

});


const mapStateToProps = ({ auth ,ui }) => {
    const { email, password, error, loading, username, fullname, profileImage } = auth;
    const { isLoading } = ui;
    return {
        email, password, error, loading, username, fullname, profileImage,isLoading
    }
}

export default connect(mapStateToProps, { onSignUpTextChanged, onSignUpUser, onImagePicked })(SignUp)