import React from 'react';
import { Text, StyleSheet, Image, ScrollView, View } from 'react-native';
import { Button, Block, BlockDetail } from '../../components/common';
import firebase from 'firebase';


export default class Landing extends React.Component {

    componentDidMount() {
        var config = {
            apiKey: "AIzaSyCU7bSoXbTGGydNHBYHYkJKBRl3F-dkuAE",
            authDomain: "tripping-22ff3.firebaseapp.com",
            databaseURL: "https://tripping-22ff3.firebaseio.com",
            projectId: "tripping-22ff3",
            storageBucket: "tripping-22ff3.appspot.com",
            messagingSenderId: "789650220393"
        };
        firebase.initializeApp(config);
    }

    onGetStartedHandler = () => {

        this.props.navigator.push({
            screen: 'trip-story.PreAuthScreen',
            title: ''
        });
    }

    render(props) {
        return (
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View>
                    <BlockDetail>
                        <Image style={styles.introImageStyle} source={require('../../assets/IntroImage.jpg')} />
                    </BlockDetail>
                    <BlockDetail>
                        <Text >Hey,{"\n"}
                            {"\n"}
                            Welcome to Tripping,here's what you can do using Tripping.{"\n"}
                            {"\n"}
                            1)Create your own Trip Group,add friends participating in the Trip and share all information.{"\n"}
                            {"\n"}
                            2)Track expense from all members of your Trip and be on track with finances.{"\n"}
                            {"\n"}
                            3)You can locate all members of your Trip group individually using our Tracker.{"\n"}
                            {"\n"}
                            4)Discover other groups Tripping.
                </Text>
                    </BlockDetail>
                </View>
                <View>
                    <BlockDetail>
                        <Button onPress={this.onGetStartedHandler} buttonText={'Get Started'} />
                    </BlockDetail>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({

    introImageStyle: {
        height: 160,
        flex: 1,
        width: null

    },
    stackStyle: {
        backgroundColor: '#2D4262'

    },
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: '#F1F1F2'
    }

});
