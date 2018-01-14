import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImageHolder,TextArea, Button } from '../../components/common';
import { connect } from "react-redux";
import { onStoryImagePicked, onStoryTextChanged,onStoryDetailAdd } from "../../store/actions";

class TripDetail extends React.Component {

    setSelectedImage= (selectedImage)=>{
        this.props.onStoryImagePicked(selectedImage )
    }
    
    onStoryTextChange(text){
         this.props.onStoryTextChanged(text);
     }

    onTripStoryDetailAdd=()=>{
         this.props.onStoryDetailAdd(this.props.storyImage,this.props.storyText,this.props.tripId); 
         this.props.closeModal();       
    }
    
    
    render() {
        return (
            <View style={styles.containerStyle}>
             <View style={styles.imageHolder}>
                <ImageHolder setSelectedImage={this.setSelectedImage}/>
                </View>
                <View style={styles.textArea}>
                <TextArea onChangeText={this.onStoryTextChange.bind(this)} value={this.props.storyText}/>
                </View>
                <View style={styles.footer}>
                 <Button buttonText={'Add'}  onPress={this.onTripStoryDetailAdd}/>
                </View>    
            </View>
        )
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        flex:1,
        marginTop:20,
        justifyContent:'space-between',
        backgroundColor: '#F1F1F2',
    },
    imageHolder:{
        flex:3
    },
    textArea:{
        flex:1
    },
    footer:{
        flex:1,
        justifyContent:'flex-end'
    }
});

mapStateToProps = ({ trip }) => {
    const { storyImage, storyText,tripId } = trip;
    return { storyImage,storyText,tripId }
}

export default connect(mapStateToProps, { onStoryImagePicked,onStoryTextChanged,onStoryDetailAdd })(TripDetail)