import {Text, StyleSheet} from 'react-native';

function Title ({children}) {
    return <Text style={styles.title}>{children}</Text>

}

const styles = StyleSheet.create({
    title:{
        fontsize:  24,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'White',
        borderWidth: 2,
        borderColor: 'White',
        padding: 12,
        maxWidth: '80%',
    }
});
export default Title;
