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

export function RegComp() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");


    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={styles.container}>
                <View style={styles.loginContainer}>
                    <Text>Reg Screen</Text>
                    <>
                        <TextInput
                            name="name"
                            placeholder="Name"
                            style={styles.textInput}
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            name="lastName"
                            placeholder="Last Name"
                            style={styles.textInput}
                            value={lastName}
                            onChangeText={setLastName}
                        />
                        <TextInput
                            name="login"
                            placeholder="login Address"
                            style={styles.textInput}
                            value={login}
                            onChangeText={setLogin}
                        />
                        <TextInput
                            name="email"
                            placeholder="E-mail"
                            style={styles.textInput}
                            value={email}
                            onChangeText={setEmail}
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
    }
});

export default RegComp;

