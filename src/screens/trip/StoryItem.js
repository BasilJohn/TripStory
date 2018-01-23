import React from 'react';
import { View, Text , StyleSheet, Image } from 'react-native';

export default class StoryItem extends  React.Component{

    render(props){

        const { storyImage, storyText } = this.props.storyItem;

        return(
        <View style={styles.containerStyle}>
            <View style={styles.storyImageContainerStyle}>
            <Image source={{uri:storyImage}} style={styles.storyImageStyle} />
            </View>
            <View style={styles.storyTextContainerStyle} >
            <Text style={styles.storyTextStyle}>{storyText}</Text>
            </View>
         </View>
        )
    }

}

const styles = StyleSheet.create({
    
    containerStyle: {
        flex: 1
    },
    storyImageStyle: {
        height: 200,
        flex: 1,
        width: null
      },
    storyTextStyle :{
        fontSize:20,
        fontFamily: 'Iowan Old Style' 
    },
    storyTextContainerStyle:{
        borderWidth:1,
        padding:2
    },
    storyImageContainerStyle:{
        flex:1,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        elevation: 30
    }
});

// export default connect(null, { fechStories })(StoryItem);