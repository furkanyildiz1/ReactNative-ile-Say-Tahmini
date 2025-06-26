import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);//user number şu işe yarar : eğer onaylancaksa gamescrene geçirir yoksa StartGameScreen'de kalır
  const [guessRounds, setGuessRounds] = useState(0); // roundsNumber oyunun kaç tur sürdüğünü tutar

  function pickedNumberHandler(pickedNumber) {// kullanıcıdan gelen sayıyı alır
    setUserNumber(pickedNumber);
    setGameIsOver(false); // oyunda sayı seçtiğimizde ekranı ikinciye taşır 

  }
  function gameOverHandler(numberOfRounds) { // oyunun bitişini belirtir
    setGameIsOver(true); // oyunun bittiğini belirtir
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler() {
    setUserNumber(null); // yeni oyuna başlamak için userNumber'ı null yapar
    setGuessRounds(0); // yeni oyuna başlamak için roundsNumber'ı sıfırlar

  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} /> // başlangıçta kullanıcı sayıyı onaylamadığı için StartGameScreen'de kalır

  if (userNumber) {
    screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />);// eğer kullanıcı sayıyı onaylarsa gamescreen'e geçer
  }

  if (gameIsOver && userNumber) { //uygulama başlangıçta userNumber undefined olduğu için bu koşul sağlanmaz, kullanıcı sayıyı onayladıktan sonra gameIsOver true olursa GameOverScreen'e geçer
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"//alan içine sığdırır
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}>

          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView> {/*burada eğer kullanıcı sayıyı onaylamadıysa StartGameScreen'i gösterir, onaylarsa GameScreen'i gösterir*/}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});


