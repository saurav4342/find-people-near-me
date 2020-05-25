import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme, Card } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderHeight } from "../constants/utils";
import { Images, materialTheme } from '../constants';
import { Icon } from '../components';
const { width, height } = Dimensions.get('screen');
const thumbMeasureW = (width - 40);
const thumbMeasureH = (height / 1.5);
const thumbMeasure = (width - 48 - 32) / 3;

export default function (props) {
  return (
    <Block style={styles.profile}>
      

      <Block ><Image
        source={{uri:'https://images.unsplash.com/photo-1508264443919-15a31e1d9c1a?fit=crop&w=640&q=1024'}}
        resizeMode="cover"
        style={styles.profileImage}
      /></Block>

      <Block style={styles.options} space='between' center>
        <Block row space='between' style={styles.buttonBlock}>
          <Block style={styles.circleButtons} center>
            <Icon name="gamepad" family="font-awesome" size={25} color={theme.COLORS.DRIBBLE} />
          </Block>
          <Block style={styles.circleButtonsXL} center space='between'>
            <Icon name="cross" family="Entypo" size={30} color={theme.COLORS.PRIMARY} />
          </Block>


          <Block style={styles.circleButtonsXL} center space='between'>
            <Icon name="heart" family="font-awesome" size={30} color={theme.COLORS.ERROR} />
          </Block>
          <Block style={styles.circleButtons} center>
            <Icon name="message1" family="AntDesign" size={25} color={theme.COLORS.TWITTER} />
          </Block>

        </Block>
        <Block center>
          <Text style={styles.nameText}>Alysse Becca</Text>
          <Text>22, Architect</Text>
        </Block>
        {/* <Block right >
          <Icon name="location-arrow" family="font-awesome" size={30} color={theme.COLORS.ERROR} />
          <Text> 2km</Text>
        </Block> */}
      </Block>


    </Block>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: width / 3,
    height: height / 10
  },
  profile: {
    marginTop: 0,
    marginBottom: -HeaderHeight * 2,
    backgroundColor: '#f8f8f8',

  },
  buttonBlock: {
    height: 'auto',
    marginTop: -theme.SIZES.BASE * 3,

  },
  heading: {
    lineHeight: 40 * 1.8,
    fontWeight: "bold",

  },
  nameText: {
    fontWeight: "bold",
    fontSize: 20
  },
  profileImg: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
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
    backgroundColor: theme.COLORS.WHITE
  },
  circleButtonsXL: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    backgroundColor: theme.COLORS.WHITE
  },
  profileContainer: {
    width: width,
    height: height,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    width: width-130 ,
    padding: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 3,
    borderRadius: 13,
    backgroundColor: '#fff',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 1, height: 13 },
    zIndex: 2,
    
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  profileImage: {
    borderRadius: 20,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasureW,
    height: thumbMeasureH,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 1, height: 13 },
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
});