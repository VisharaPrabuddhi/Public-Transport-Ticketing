import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native'

const ChooseFrom = () => {

    const navigation = useNavigation();

    const goToReload = async () => {
        navigation.navigate("Home");
    }

    const goToTickets = async () => {
        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>

                <TouchableOpacity onPress={goToTickets} activeOpacity={0.95} style={styles.button}>
                    <Text style={styles.text}>Buy Tickets</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={goToReload} activeOpacity={0.95} style={styles.button}>
                    <Text style={styles.text}>Reload</Text>
                </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: 'darkmagenta',
        height: 100,
        justifyContent: 'center',
        borderRadius: 10,
        width: "90%",
        margin: 10
    },

    text: {
        textAlign:'center',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white'
    }
})

export default withNavigation(ChooseFrom);