import { View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import { useState } from "react";
import PrimaryButton from "../componenets/PrimaryButton";
import Title from "../componenets/Title";
import Card from "../componenets/card";
import InstractionText from "../componenets/InstractionText";


function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    //bileşenler içinde boyut ayarlaması yapmak için reactnativn hooku olan useWindowDİMENSİONS kullanılabilir
    const { width, height } = useWindowDimensions(); // bu hook bileşenin boyutlarını alır ve bileşen her render edildiğinde güncellenir

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)// use satetim dizi olrak alıyor bunu tür değişimi yapıcam

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number',
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }

        onPickNumber(chosenNumber); //onPickNumber fonksiyonunu çağırıyoruz ve bu fonksiyon App.js'de tanımlı
    }

    const marginTopDistance = height < 380 ? 30 : 100; // cihazın yüksekliğini alıyoruz

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position"> 
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstractionText>Enter a Number</InstractionText>
                        <TextInput style={styles.numberInput} maxLength={2}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={numberInputHandler}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView >
        </ScrollView>

    );
}
//const deviceHihght = Dimensions.get('window').height; // cihazın yüksekliğini alır
//her zmaan kullanmak istmeme çünkü bileşenler her zaman render edilebilirken style kodları tek bir kere çalışır
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        //marginTop: deviceHihght < 380 ? 30 : 100, // cihazın yüksekliğine göre marginTop değerini ayarlar
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
    }
});

export default StartGameScreen;