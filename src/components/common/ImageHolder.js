import React from 'react';
import { View , Text , StyleSheet } from 'react-native'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from "react-native-image-picker";

export default class ImageHolder extends React.Component{

    state = {
        pickedImage: null
      };

      pickedImageHandler = () => {
        ImagePicker.showImagePicker(
          {
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
              //this.props.onImagePicked({ uri: res.uri, base64: res.data });
            }
          }
        );
      };

    render(){
        return(
            <View>
                <View style={styles.actionIconContainer}>
                <View style={styles.ionicons}>
                <Ionicons name={"md-create"} onPress={this.pickedImageHandler } color={"black"} size={30} />
                </View>
                <View style={styles.ionicons}>
                <Ionicons name={"md-trash"}  color={"black"} size={30} />
                </View>
                </View>
             </View>
        )
    }
}

const styles = StyleSheet.create({
   
    actionIconContainer: {
      
       flexDirection:'row', 
       justifyContent: 'flex-end',
       marginLeft:10
    },
    ionicons:{
        margin:10
    }
});

export { ImageHolder }