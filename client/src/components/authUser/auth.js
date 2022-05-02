import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button, AppRegistry,
} from 'react-native';
import {authentication} from "../../actions/user";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function Auth( {navigation} ) {
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
                        <Button
                            title="Go to Details"

                            onPress={() => navigation.navigate('Details')}
                        />
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

