import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Dimensions, TextInput, TouchableOpacity, ScrollView, Picker } from 'react-native'
import { Input, Block, Button, Text, theme, Switch, Icon, Toast } from 'galio-framework';
import { db } from '../firebase/Firebase';
import Images from '../constants/Images';
import GalleryImage from '../components/GalleryImage';
const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

var inputFieldColor;
export default function ProfileEdit(props) {
    const [name, setName] = useState(props.userProfile.name);
    const [occupation, setOccupation] = useState(props.userProfile.occupation);
    const [about, setAbout] = useState(props.userProfile.about);
    const [imgURL, setImgURL] = useState();
    const [profile, setProfile] = useState('');
    const [age, setAge] = useState(props.userProfile.age);
    const [preference, setPreference] = useState(props.userProfile.preference);
    const [isShow, setShow] = useState(false);

    return (

        <Block space='around' style={styles.container} center>
            <ScrollView>
                <Block style={styles.inputBlock}>
                    <Text color={theme.COLORS.ERROR} style={styles.label}>Personal Info</Text>
                    <Block marginTop={10}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.textInput} 
                                   onChangeText={(name) => setName(name)}
                                    value={name}>
                                   </TextInput>
                    </Block>
                    <Block marginTop={10}>
                        <Text style={styles.label}>Occupation</Text>
                        <TextInput style={styles.textInput}
                                     onChangeText={(occupation) => setOccupation(occupation)}
                                     value={occupation}
                                     >
                                        
                                     </TextInput>
                    </Block>

                    <Block marginTop={10}>
                        <Text style={styles.label}>About</Text>
                        <TextInput style={styles.textInput}
                         onChangeText={(about) => setAbout(about)}
                             value={about}
                         ></TextInput>
                    </Block>
                    <Block row space='between'>
                        <Block marginTop={10}>
                            <Text style={styles.label}>Agee</Text>
                            <TextInput keyboardType='number-pad'
                             maxLength={2}
                              style={styles.textInput}
                               onChangeText={(age) => setAge(age)}
                                   value={age}
                               ></TextInput>
                        </Block>
                        <Block marginTop={10} right space='between'>
                            <Text style={styles.label}>Show me</Text>
                            <Block row>

                                <Picker
                                    selectedValue={preference}
                                    style={{ height: 50, width: 100 }}
                                    mode='dropdown'
                                    onValueChange={(itemValue, itemIndex) => setPreference(itemValue)}>
                                    <Picker.Item label="Male" value="M" />
                                    <Picker.Item label="Female" value="F" />
                                    <Picker.Item label="Both" value="BOTH" />
                                </Picker>
                            </Block>
                        </Block>
                    </Block>

                </Block>
                <Block style={styles.inputBlock}>
                    <Block row space='between'>
                        <Text color={theme.COLORS.ERROR} style={styles.label}>Photoss</Text>
                        <Icon name="edit" family="MaterialIcons"></Icon>
                    </Block>
                    <Block marginTop={10} flexDirection='row' flexWrap='wrap'>
                        {
                            Images.Viewed.map((image, idx) =>
                                <GalleryImage
                                    index={idx}
                                    key={idx}
                                    onPress={showLightbox}
                                    uri={image}
                                />
                            )}
                    </Block>
                </Block>

            </ScrollView>
            <Block style={styles.inputBlock} row space='between'>
               <TouchableOpacity onPress={() => props.onDiscardChanges()}>
                <Icon name="cross" family="Entypo" size={35} color={theme.COLORS.ERROR} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onSaveChanges({
                    name,
                    occupation,
                    about,
                    age,
                    preference
                })}>
                <Icon name="check" family="AntDesign" size={35} color={theme.COLORS.SUCCESS} />
                </TouchableOpacity>
            </Block>
        </Block>
    )
}
const showLightbox = () => {

}
const styles = StyleSheet.create({
    container: {
        width: width - 50
    },
    inputBlock: {
        width: width - 60,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowColor: '#f8f8f8',
        shadowOpacity: 0.3,
        elevation: 1,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 3 },
        marginBottom: 15
    },
    circleButtons: {
        width: 30,
        height: 30,
        borderRadius: 25,
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
        backgroundColor: theme.COLORS.WHITE,
        marginLeft: 10
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#e9ecef'
    },
    thumb: {
        borderRadius: 4,
        marginVertical: 4,
        alignSelf: 'center',
        width: thumbMeasure,
        height: thumbMeasure
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    },
    label: {
        fontWeight: 'bold'
    }
});