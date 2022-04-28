import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
} from 'react-native';
import {Formik} from 'formik';
import {authentication} from "../../actions/user";

const Auth = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={styles.container}>
                <View style={styles.loginContainer}>
                    <Text>Login Screen</Text>
                    <>
                        <TextInput
                            name="login"
                            placeholder="login Address"
                            style={styles.textInput}
                            value={login}
                            onChangeText={setLogin}
                        />
                        <TextInput
                            name="password"
                            placeholder="Password"
                            style={styles.textInput}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        <Button onPress={() => authentication(login, password)} title={"Press"}/>
                    </>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        width: '80%',
        alignItems: 'center',
    },
});

export default Auth;
