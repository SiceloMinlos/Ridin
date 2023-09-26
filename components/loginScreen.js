import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Pressable } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigatation = useNavigation();

    const handleLogin = () => {

        //Logic Goes Here

        console.log(`Username: ${username}, Password: ${password}`);

    };

    const handleRegister = () => {

        //Logic Goes Here

        console.log('Navigate to registration page');
        navigatation.navigate('Register')

    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../images/logo.png')}
                style={{ width: 400, height: 400 }}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input]}
                    placeholder="USERNAME"
                    placeholderTextColor={'#808080'}
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <View style={styles.iconContainer}>
                    <FontAwesomeIcon name='user' size={25} color={'black'} />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input]}
                    placeholder="PASSWORD"
                    placeholderTextColor={'#808080'}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <View style={styles.iconContainer}>
                    <FontAwesomeIcon name='lock' size={25} color={'black'} />
                </View>
            </View>

            <Pressable
                style={styles.customButton}
                onPress={handleLogin}
            >
                <Text style={[styles.customButtonText]}>LOGIN</Text>
            </Pressable>
            <Text style={styles.Rtext}>No account yet? <Text
                style={{ fontWeight: "bold" }}
                onPress={handleRegister}
            >
                Register here</Text>.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        width: '85%',
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
    },
    buttonStyle: {
        width: '85%'
    },
    Rtext: {
        color: 'white',
        marginLeft: 0
    },
    customButton: {
        width: '85%',
        height: 60,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#ABC0CA', // Set the background color of the button
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    customButtonText: {
        color: 'black',
        fontWeight: 'bold'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        marginBottom: 5
    },
    iconContainer: {
        marginRight: 10,
        marginLeft: -26,
        marginBottom: 5
    }
});
