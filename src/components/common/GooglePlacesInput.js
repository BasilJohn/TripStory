import React from 'react';
import { View, Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};



const GooglePlacesInput = (props) => {


  return (
    <GooglePlacesAutocomplete
      placeholder='Enter Location'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        props.setSelectedPlace(data.description);
      }}
      
      getDefaultValue={() => ''}
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyBkMGzRlwwvz4aTniQsyurIpRk9YP_ZnJs',
        language: 'en', // language of the results
        types: '(cities)' // default: 'geocode'
      }}
      
      styles={{
       textInputContainer: {
        backgroundColor: 'rgba(0,0,0,0)',
        alignSelf:'stretch',
        borderTopWidth: 0,
        borderBottomWidth:0
        
      },
      container : {
        flex:1,
        backgroundColor: '#F1F1F2'
      },
      textInput: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        height: 40,
        color: '#5d5d5d',
        fontSize: 16,
        borderWidth: 1,
        borderRadius:0
      },
      listView : {
        backgroundColor: '#F1F1F2'
      },
      predefinedPlacesDescription: {
        color: '#1faadb'
      },
      }}
      
      currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      //renderLeftButton={()  => <Image source={require('./Images/')} /> }
      //renderLeftButton={()  => <Text>renderLeftButton</Text>}
      //renderRightButton={() => <Text>Custom text after the input</Text>}
    />
  );
}

export { GooglePlacesInput };