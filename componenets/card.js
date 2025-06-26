import { View, StyleSheet, Dimensions } from 'react-native';

function Card({children}) {
    return  <View style={styles.card}> {children}

    </View>
}

const deviceWidth=Dimensions.get('window').width; // cihazın genişliğini alır

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36, // cihazın genişliğine göre marginTop değerini ayarlar
        maarginHorizontal: 24,
        padding: 16,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4, //android shadowdur gölgelendirme
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});
export default Card;