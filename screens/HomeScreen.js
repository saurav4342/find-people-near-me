import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, Image, Alert, TouchableOpacity, ToastAndroid } from 'react-native';
import { DeckSwiper, Block, theme } from 'galio-framework';
import GetLocation from '../location/Location';
import { insertOne } from '../firebase/InsertService';
import { getData } from '../firebase/QueryService';
import ProfileCard from '../components/ProfileCard';
import { LinearGradient } from 'expo-linear-gradient';
import Onboarding from './Onboarding';
import { Icon } from '../components';
import { screenNames } from '../constants/utils';
import firebase from '../firebase/Firebase';
import ProfileEditScreen from '../screens/ProfileEdit';
import FullProfile from '../screens/FullProfile.js';
const { width, height } = Dimensions.get('screen');
const elements = [
  <View style={{ backgroundColor: '#B23AFC', height: 250, width: 250 }}>
    <Text>You wanna see a cool component?</Text>
    <Text>Galio has this cool Deck Swiper</Text>
  </View>,
  <View style={{ backgroundColor: '#FE2472', height: 250, width: 250 }}>
    <Text>What did you expect?</Text>
    <Text>This React Native component works perfectly</Text>
  </View>,
  <View style={{ backgroundColor: '#FF9C09', height: 250, width: 250 }}>
    <Text>Maybe you want to build the next Tinder</Text>
  </View>,
  <View style={{ backgroundColor: '#45DF31', height: 250, width: 250 }}>
    <Text>or maybe you just want a nice deck swiper component</Text>
    <Text>Galio has everything sorted out for you</Text>
  </View>
];
export default function HomeScreen() {
  const [location, setLocation] = useState(null);
  const [usersNearby, setUsersNearby] = useState(null);
  const [screen, setScreen] = useState();
  const [user, setUser] = useState();
  const [userProfile, setUserProfile] = useState();
  const [visibleToast, setvisibleToast] = useState(false);
  const [toastMsg, setToastMsg] = useState();
  useEffect(() => {
    console.log("called use effect");
    setvisibleToast(false);
    if (!screen) setScreen(screenNames.onboard);
    if (!user) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          setUser(user);
          setScreen(screenNames.home)
        } else {
          // No user is signed in.
          setScreen(screenNames.onboard);
        }
      });
    }
    if (user && !userProfile) {
      getProfileDataFromDb(user,setUserProfile)
    }

    // (async () => {
    //   let location = await GetLocation();
    //   if (location === null) {
    //     alert("failed to get location")
    //   }
    //   setLocation(location);
    // })();
    //insertOne("hb_user_profile", "123456", { displayName: "saurav", uuid: 54776675, location }).then((res) => {
    // alert(res?"Success":"failed");
    //});
    //setUsersNearby(getData("location","id", "==",123))
  });
 
  return (
    <Block>{screen === screenNames.onboard ?
      returnOnboarding(setScreen) :
      screen === screenNames.home ?
        returnHomescreen(setScreen) :
        screen === screenNames.profile ?
          returnProfileEditScreen(setScreen, user, visibleToast, setvisibleToast, toastMsg, setToastMsg, userProfile) :
          screen === screenNames.fullProfile ?
            returnFullProfileScreen(setScreen, user) : <Text>"No Screen selected"</Text>
    }
    </Block>

  );
}
const returnHeaderComp = () => {
  return (
    <Block>
      <Block row paddingLeft={20} width={width} paddingTop={height / 22}>
        <Block left paddingTop={10}>
          <TouchableOpacity onPress={() => setScreen(screenNames.profile)}>
            <Block style={styles.circleButtons} center>
              <Icon name="user" family="AntDesign" size={25} color={theme.COLORS.ERROR} />
            </Block>
          </TouchableOpacity>
        </Block>
        <Block center width={width - 150} height={100}>
          <Image source={require('./logo.png')} style={styles.logo} />
        </Block>
        <Block right paddingTop={10} right>
          <Block style={styles.circleButtons} center>
            <Icon name="message1" family="AntDesign" size={25} color={theme.COLORS.ERROR} />
          </Block>
        </Block>
      </Block>
    </Block>
  )
}
const returnHomescreen = (setScreen) => {

  return (
    <Block style={styles.header}>
      <Block row paddingLeft={20} width={width} paddingTop={height / 22}>
        <Block left paddingTop={10}>
          <TouchableOpacity onPress={() => setScreen(screenNames.profile)}>
            <Block style={styles.circleButtons} center>
              <Icon name="user" family="AntDesign" size={25} color={theme.COLORS.ERROR} />
            </Block>
          </TouchableOpacity>
        </Block>
        <Block center width={width - 150} height={100}>
          <Image source={require('./logo.png')} style={styles.logo} />
        </Block>
        <Block right paddingTop={10} right>
          <Block style={styles.circleButtons} center>
            <Icon name="message1" family="AntDesign" size={25} color={theme.COLORS.ERROR} />
          </Block>
        </Block>
      </Block>
      <TouchableOpacity onPress={() => setScreen(screenNames.fullProfile)}>{returnProfileCard()}</TouchableOpacity>

    </Block>
  )
}
const returnProfileCard = () => {
  return (
    <ProfileCard />

  )
};
const returnOnboarding = (setScreen) => {
  return (
    <Onboarding onSignupSuccess={(user) => onSignUpSuccess(screenNames.home, user, setScreen)} />
  )
};

const returnProfileEditScreen = (setScreen, user, visibleToast, setvisibleToast, toastMsg, setToastMsg, userProfileDb,setUserProfile) => {
  return (
    <Block style={styles.profileEditScreen}>
      {returnHeaderComp()}
      <Toast visible={visibleToast} message={toastMsg} />
      <ProfileEditScreen 
const onSaveChanges = (userProfile, setScreen, user, setvisibleToast, setToastMsg, setUserProfile) => {
        onSaveChanges={(userProfile) => onSaveChanges(userProfile, setScreen, user, setvisibleToast, setToastMsg, setUserProfile)}
        onDiscardChanges={() => setScreen(screenNames.home)}
        userProfile={userProfileDb}

      />
    </Block>
  )
};
const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
    return null;
  }
  return null;
};
const returnFullProfileScreen = (setScreen) => {
  return (
    <FullProfile navigateHome={() => setScreen(screenNames.home)} />
  )
}
const onSignUpSuccess = (screen, user, setScreen) => {
  setScreen(screenNames.home);
  //Alert.alert(user.user.email)
}
const onSaveChanges = (userProfile, setScreen, user, setvisibleToast, setToastMsg, setUserProfile) => {
  insertOne("hb_user_profile", user.uid, userProfile)
    .then((value) => {
      if (value === true) {
        setToastMsg("Changes saved successfully");
        setvisibleToast(true);
        setScreen(screenNames.home);
        getProfileDataFromDb(user,setUserProfile)
      }
      else {
        setToastMsg("Error saving changes");
        setvisibleToast(true);
      }
    })
    .catch((error) => {
      setToastMsg("Error saving changes");
      setvisibleToast(true);
    });

}
const getProfileDataFromDb = (user,setUserProfile) => {
  getData('hb_user_profile', user.uid).then((result) => {
    console.log(result);
    setUserProfile(result);
  });
}
const styles = StyleSheet.create({
  logo: {
    width: width / 3,
    height: height / 10
  },
  circleButtons: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    backgroundColor: '#fff'
  },
  profileEditScreen: {
    backgroundColor: '#f8f8f8',
    height: height
  },
  header: {
    backgroundColor: '#f8f8f8',
    height: height
  }
})