import React from 'react';
import {TouchableOpacity, Image,Dimensions,View, StyleSheet} from 'react-native';
const WIDTH = Dimensions.get('window').width;
export default function (props) {
    return (
        
        <TouchableOpacity>
            <Image source={{uri:props.uri}} style={styles.thumb}/>
        </TouchableOpacity>
       
    )
}

const styles= StyleSheet.create({
    thumb: {
        alignSelf: 'center',
        width: WIDTH/4,
        height: WIDTH/4,
        resizeMode: 'cover'
      },
})