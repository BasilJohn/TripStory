import React from 'react';
import { View , Text , StyleSheet, Image } from 'react-native'; 
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
              this.props.setSelectedImage({ uri: res.uri, base64: res.data });
            }
          }
        );
      };

    render(){
        return(
            <View style={styles.actionIconContainer}>
               <Image source={this.state.pickedImage}  style={styles.imageStyle} />
                <View style={styles.actionContainer} >
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
       flex:1,
       flexDirection:'row', 
       justifyContent: 'flex-end',
    },
    ionicons:{
       margin:10
    },
    imageStyle: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
        
      },
      actionContainer:{
        flex:1,
        flexDirection:'row',
        position:'absolute'
      }
});

export { ImageHolder }