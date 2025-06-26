import {View, Text ,StyleSheet} from 'react-native';

function GuessLogItem ({roundNumber, guess}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponents Guess : {guess}</Text> 
        </View>


    );
}

const styles = StyleSheet.create({
    listItem:{
        borderColor:'#72063c',
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#ddb52f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 3,
        shadowOpacity: 0.25,
        width: '100%',

    },
    itemText:{
        fontFamily: 'open-sans',


    }
});
export default GuessLogItem;