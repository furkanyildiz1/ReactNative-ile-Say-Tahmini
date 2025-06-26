import { View, Alert, FlatList, useWindowDimensions } from "react-native";
import { StyleSheet } from "react-native";
import Title from "../componenets/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../componenets/game/NumberContainer";
import PrimaryButton from "../componenets/PrimaryButton";
import Card from "../componenets/card";
import InstractionText from "../componenets/InstractionText";
import Icon from 'react-native-vector-icons/FontAwesome';
import GuessLogItem from "../componenets/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {//exclude ile verilen sayıyı hariç tutarak min ve max arasında rastgele sayı üretir
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber); // 1 ile 100 arasında userNumber hariç rastgele bir sayı üretir
    const [currentGuess, setCurrentGuess] = useState(initialGuess); //initial gguess ilk tahmşindir ve bu sayıyı useState ile state olarak tutuyoruz
    const [guessRounds, setGuessRounds] = useState([initialGuess]); // tahmin turlarını tutar ve değerlerini initialGuess ile başlatır
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length); // eğer currentGuess userNumber'a eşitse oyunu bitir

        }
    }, [currentGuess, userNumber, onGameOver]); // currentGuess, userNumber ve onGameOver değiştiğinde useEffect tetiklenir

    useEffect(() => {
        minBoundary = 1; // oyunun tekrar başlangıcında minBoundary'i 1 yapıyoruz
        maxBoundary = 100; // oyunun tekar başlangıcında maxBoundary'i 100 yapıyoruz
    }, []);

    function nextGuessHandler(direction) { //direction => lower veya greater
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' }
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1; // +1 yaparak currentGuess'i hariç tutuyoruz
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber); // yeni rastgele sayıyı currentGuess'e atıyoruz
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]); // her tahminde guessRounds'u 1 artırıyoruz

    }

    const guessRoundsListLength = guessRounds.length; // guessRounds dizisinin uzunluğunu alıyoruz

    let content = (<>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstractionText style={styles.instructionText}>Higher or Lower</InstractionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}><PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Icon name="minus-circle" size={30} color="white" /></PrimaryButton></View>

                <View style={styles.buttonContainer}><PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Icon name="plus-circle" size={30} color="white" />
                </PrimaryButton></View>
            </View>
        </Card></>
    );

    if (width > 500) {
        content = (<>
            <View style={styles.buttonsContianerWide}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Icon name="minus-circle" size={30} color="white" />
                    </PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Icon name="plus-circle" size={30} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </>);
    }


    return (
        <View style={styles.screen}>
            <Title>Opponents Guess</Title>
            {content}
            <View style={styles.listContainer}>
                {/*{guessRounds.map(guessRounds=> <Text key = {guessRounds} >{guessRounds}</Text>)}*/}
                <FlatList
                    data={guessRounds} // guessRounds dizisini kullanıyoruz
                    renderItem={(itemData) => (<GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />)} //  itemData.index ile index'i alıyoruz ve guessRoundsListLength'ten çıkararak tur sayısını elde ediyoruz
                    // itemData.item ile de guessRounds dizisindeki tahmin değerini alıyoruz
                    keyExtractor={(item) => item} // her bir tahmin turunun anahtarını item olarak alıyoruz eşsiz olması için
                ></FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContianerWide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});
export default GameScreen;
