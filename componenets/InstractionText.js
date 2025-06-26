import { Text , StyleSheet} from "react-native";

function InstractionText({children, style}){
    return <Text style={[styles.instructionText , style]}>{children}</Text>// style ile gelen style'ı da ekliyoruz "style" ismini ben verdim 

}

const styles = StyleSheet.create({
    instructionText:{
        color:'#ddb52f',
        fontSize: 24,
    },
});

export default InstractionText;
