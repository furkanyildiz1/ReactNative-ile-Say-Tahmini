import { View, StyleSheet, Image, Text, Dimensions, useWindowDimensions, ScrollView } from 'react-native';
import Title from '../componenets/Title';
import PrimaryButton from '../componenets/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();
    let imageSize = 300;

    if (width > 380) {
        imageSize = 150;
    }

    if(height > 400){
        imageSize = 80;
    }
    
    const imageStyle = {
        height: imageSize,
        width: imageSize,
        borderRadius: imageSize / 2,
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.image} source={require('../assets/images/success.png')} />
                </View>
                <Text style={styles.summarytext}>
                    Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>

                <PrimaryButton onPress={onStartNewGame}> Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    )

}
//const deviceWİdth = Dimensions.get('window').width; // cihazın genişliğini alır



const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    imageContainer: {
        //width: deviceWİdth < 380 ? 150 : 300, // cihazın genişliğine göre width değerini ayarlar
        //height: deviceWİdth < 380 ? 150 : 300, // cihazın genişliğine göre height değerini ayarlar
        //borderRadius:deviceWİdth < 380 ? 75 : 150, // cihazın genişliğine göre borderRadius değerini ayarlar
        borderWidth: 3,
        overflow: 'hidden',
        borderColor: '#3b021f',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',

    },
    summarytext: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: '#3b021f',
    },

});

export default GameOverScreen;