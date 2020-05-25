import * as Location from 'expo-location';

export default async function GetLocation(){
        let location=null;
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          alert('Permission to access location was denied');
        }
  
        location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});

      return location;
}