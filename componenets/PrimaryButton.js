import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.pressed, styles.buttonInnerContainer]
                        : styles.buttonInnerContainer
                }
                onPress={onPress}//onpressten aldığımız değeri pressablin onpressine atıyoruz
                android_ripple={{ color: '#640233' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: 'hidden', // container içindekini dıaşrı taşırmaz
    },
    buttonInnerContainer: {
        backgroundColor:'#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // Android shadow
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75, // butona basıldığında opaklığı azaltır ıos görsel efect sağladı

    }
});
export default PrimaryButton;