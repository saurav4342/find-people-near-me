import React,{useState} from 'react';
import { StyleSheet, Dimensions, Alert } from 'react-native';
import { Block, Button, Text, theme, Input } from 'galio-framework';
import firebase from '../firebase/Firebase';
const { height, width } = Dimensions.get('screen');
const FBSDK = require('react-native-fbsdk');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';
const {
  LoginManager,
  AccessToken,
} = FBSDK;
export default function Onboarding(props) {
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
    return (
      <Block style={styles.container}>
              <Block center paddingTop={height/2} width={width-60}>
              <Text>{email}{password}</Text>
              <Input placeholder="Email" 
              color={theme.COLORS.BLACK} 
              style={{ borderColor: theme.COLORS.THEME }}
               placeholderTextColor={theme.COLORS.THEME}
               onChangeText={(email) => setEmail(email)} 

               />
              <Input placeholder="Password" 
              password viewPass 
              color={theme.COLORS.BLACK} 
              style={{ borderColor: theme.COLORS.THEME }} 
              placeholderTextColor={theme.COLORS.THEME} 
              onChangeText={(password) => setPassword(password)}

              />
              <Block paddingTop={20}>
               <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => signIn(email,password,props.onSignupSuccess)}
                opacity={0.1}
                >
                GET ME IN
              </Button>
              </Block>
              <Block paddingTop={20}>
              <Button
             
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => signUp(email,password,props.onSignupSuccess)}>
                GET STARTED
              </Button>
            </Block>
          </Block>
      </Block>
    );
  
}

 const loginFacebook = () => {
  return (
    LoginManager.logInWithReadPermissions(['public_profile', 'user_friends', 'email'])
      .then(
        (result) => {
          if (result.isCancelled) {
            Alert.alert('Whoops!', 'You cancelled the sign in.');
          } else {
            AccessToken.getCurrentAccessToken()
              .then((data) => {
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                firebase.auth().signInWithCredential(credential)
                  .then(loginUserSuccess(dispatch))
                  .catch((error) => {
                    loginSingUpFail(dispatch, error.message);
                  });
              });
          }
        },
        (error) => {
          Alert.alert('Sign in error', error);
        },
      )
  )
};
const signUp = (email, password, onSignupSuccess) => {
  try {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => { 
               onSuccessfulSignup(user,onSignupSuccess);
         });
} catch (error) {
    console.log(error.toString(error));
  }
};
const signIn = (email, password, onSignupSuccess) => {
  try {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => { 
               onSuccessfulSignup(user,onSignupSuccess);
         });
} catch (error) {
    console.log(error.toString(error));
  }
}
const onSuccessfulSignup = (user,onSignupSuccess) => {
  onSignupSuccess(user);
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.COLORS.BLACK,
    width: width,
    height: height
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  imageBackground: {
    width: width,
    height: height,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  socialButtonGroup: {
    justifyContent: 'center'
  }
});
