import React from 'react';
import { Block, Icon, theme, Text } from 'galio-framework';
import { StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import Images from '../constants/Images';
import GalleryImage from '../components/GalleryImage';
const { width, height } = Dimensions.get('screen');

export default function (props) {
    return (
        <Block>
            <ScrollView>
            <TouchableOpacity style={styles.backIcon} onPress={() => props.navigateHome()}>
            <Block>
            <Icon name="back" family="AntDesign" color='#fff' size={30}></Icon>
            </Block></TouchableOpacity>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1508264443919-15a31e1d9c1a?fit=crop&w=640&q=1024' }}
                    style={styles.image}
                ></Image>
                <Block row space='between' style={styles.buttonBlock} center>
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
                <Block style={styles.textCard}>
                    <Block style={styles.nameBlock} row space='between'>
                        <Text style={styles.nameText}>Saurav Nayak, 22</Text>
                        <Block>
                            <Icon name="navigation" family="Feather" size={30} color={theme.COLORS.PRIMARY} />
                            <Text>2km</Text>
                        </Block>
                    </Block>
                <Block paddingTop={10} minHeight={height/6} paddingBottom={10} borderBottomColor={'#c7cbcf'} borderBottomWidth={1}>
                    <Text style={styles.blockText}>Bio</Text>
                    <Block>
                        <Text color='#a3a3a3'>
                        Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable earnestly so perceived. Imprudence he in sufficient cult                        </Text>
                    </Block>
                </Block>
                <Block paddingTop={10}>
                    <Text style={styles.blockText}>Photos</Text>
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
                </Block>
            </ScrollView>
        </Block>
    )
}
const showLightbox = () => {

}
const styles = StyleSheet.create({
    image: {
        width: width,
        height: height / 2.3,
        resizeMode: 'cover'
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
    buttonBlock: {
        height: 'auto',
        marginTop: -theme.SIZES.BASE * 3.5,
        width: width - 130
    },
    textCard: {
        marginTop: -35,
        borderRadius: 30,
        backgroundColor: '#fff',
        height: height,
        paddingTop: height / 14,
        paddingLeft: width / 15,
        paddingRight: width / 15
    },
    nameText: {
        color: '#a3a3a3',
        fontWeight: 'bold',
        fontSize: 20
    },
    nameBlock: {
        height: height / 12,
        borderBottomColor: '#c7cbcf',
        borderBottomWidth: 1
    },
    blockText:{
       fontWeight: 'bold',
       color: '#555555'
    },
    backIcon:{
        position:"absolute",
        top:50,
        left:30,
        zIndex:2,
        color:'#fff',
        borderRadius: 25,
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
        //backgroundColor: theme.COLORS.WHITE
    }
});