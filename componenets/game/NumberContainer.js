import {View, Text, StyleSheet, Dimensions} from 'react-native';


function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    );
}
const deviceWidth = Dimensions.get('window').width; // cihazın genişliğini alır

const styles=StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: '#ddb52f',
        padding: deviceWidth < 380 ? 12 : 24, // cihazın genişliğine göre padding değerini ayarlar
        margin: deviceWidth < 380 ? 12 : 24, // cihazın genişliğine göre margin değerini ayarlar
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberText: {
        color: '#ddb52f',
        fontSize: deviceWidth < 380 ? 28 : 36, // cihazın genişliğine göre font boyutunu ayarlar
        fontWeight: 'bold',
    },

});

export default NumberContainer;