import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Block, BlockDetail, Button, Input, Spinner } from '../../components/common';
import { onSignUpTextChanged, onSignUpUser } from '../../store/actions';
import { connect } from 'react-redux';
import firebase from 'firebase';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0
class SignUp extends React.Component {


    static navigationOptions = {
        title: 'Sign Up',
        headerTintColor: '#F1F1F2',
        headerTitleStyle: { color: '#F1F1F2' }
    };

    onPressButton() {
        const { email, password, username, fullname } = this.props;
        this.props.onSignUpUser({ email, password, username, fullname });

    }

    renderButton() {
        if (this.props.loading) {
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
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <KeyboardAvoidingView behavior="position">
                    <BlockDetail>
                        <TouchableOpacity style={styles.buttonStyle}>
                            <Image
                                style={styles.introImageStyle}
                                source={require('../../assets/SimpleAdd.svg')}
                            />
                        </TouchableOpacity>
                    </BlockDetail>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={keyboardVerticalOffset}>
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
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior="position">
                    {this.renderButton()}
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#F1F1F2',
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
    }

});

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading, username, fullname } = auth;
    return {
        email, password, error, loading, username, fullname
    }
}

export default connect(mapStateToProps, { onSignUpTextChanged, onSignUpUser })(SignUp)