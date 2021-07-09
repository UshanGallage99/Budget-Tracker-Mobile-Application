import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, StyleSheet, Text, TouchableOpacity, View, Alert, Image } from 'react-native'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    clearText = () => {
        this.setState({ name: '' })
        this.setState({ email: '' })
        this.setState({ password: '' })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.container1}>
                <Image
                    resizeMode='contain'
                    style={{
                    width: 35,
                    height: 35,
                    marginTop: 10,
                    position: 'absolute',
                    top:60,
                    left:65
                    }}
                    source={require('../assests/logo.png')} />

            <Text style={{
                            color: '#000',
                            fontSize: 30,
                            letterSpacing: 3,
                            position: 'absolute',
                            top:70,
                            left:110,
                            textAlign: 'center'
                            
                        }}>
                            Budget Tracker
                        </Text>
                        <Text style={{
                            color: '#053742',
                            fontSize: 25,
                            letterSpacing: 3,
                            position: 'absolute',
                            top:170,
                            textAlign: 'center'
                            
                        }}>
                            Welcome
                        </Text>
                        <Text style={{
                            color: '#053742',
                            fontSize: 25,
                            letterSpacing: 3,
                            position: 'absolute',
                            top:210,
                            textAlign: 'center'
                            
                        }}>
                            To The
                        </Text>
                        <Text style={{
                            color: '#053742',
                            fontSize: 25,
                            letterSpacing: 3,
                            position: 'absolute',
                            top:250, 
                            textAlign: 'center'
                            
                        }}>
                             Budget Tracker
                        </Text>

                    <TextInput
                        placeholder='Name'
                        placeholderTextColor="#C2B8A3"
                        style={{
                            color: 'black',
                            width: '85%',
                            fontSize: 15,
                            marginLeft: 10,
                            padding: 10,
                            letterSpacing: 3,
                            marginTop: 10,
                            backgroundColor: '#fff',
                            borderRadius: 25
                        }}
                        onChangeText={(value) => this.setState({ name: value })}
                        value={this.state.name}
                    >
                    </TextInput>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor="#C2B8A3"
                        style={{
                            color: 'black',
                            width: '85%',
                            fontSize: 15,
                            marginLeft: 10,
                            letterSpacing: 3,
                            padding: 10,
                            marginTop: 10,
                            backgroundColor: '#fff',
                            borderRadius: 25
                        }}
                        onChangeText={(value) => this.setState({ email: value })}
                        value={this.state.email}
                    >
                    </TextInput>
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="#C2B8A3"
                        style={{
                            color: 'black',
                            width: '85%',
                            fontSize: 15,
                            marginLeft: 10,
                            letterSpacing: 3,
                            padding: 10,
                            marginTop: 12,
                            backgroundColor: '#fff',
                            borderRadius: 25
                        }}
                        onChangeText={(value) => this.setState({ password: value })}
                        value={this.state.password}
                    >
                    </TextInput>
                    <TouchableOpacity
                        onPress={() => {
                            fetch('http://192.168.1.103:3010/user', {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    name: this.state.name,
                                    email: this.state.email,
                                    password: this.state.password
                                })
                            })
                                .then((response) => response.json())
                                .then((json) => {
                                    if (json) {
                                        Alert.alert(
                                            "Signed Up Successfully, Please Login..!",
                                            [
                                                {
                                                    text: "Cancel",
                                                    onPress: () => console.log("Cancel Pressed"),
                                                    style: "cancel"
                                                },
                                                { text: "OK", onPress: () => navigate('Login', { name: 'Login' }) }
                                            ]
                                        );
                                        this.clearText()
                                    }
                                })
                                .catch((error) => {
                                    Alert.alert(
                                        "SignUp Error..!",
                                        "Please enter Valid Details",
                                        [
                                            { text: "OK", onPress: () => navigate('SignUp', { name: 'SignUp' }) }
                                        ]
                                    );
                                })
                        }
                        }
                        style={{
                            marginTop: 35,
                            width: '85%',
                            height: 50,
                            backgroundColor: '#01937C',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        }}
                    >
                        <Text style={{
                            color: '#000',
                            fontWeight: '100',
                            fontSize: 18,
                            letterSpacing: 3,
                            textAlign: 'center'
                             
                        }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                <View style={styles.container2}>
                    <View style={{
                        flexDirection: 'row', 
                        marginTop: 100,
                        justifyContent: 'center'
                    }}
                    >
                        <Text style={{
                            color: '#423F3E',
                            paddingRight: 15
                        }}>
                            Already have an account ?
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigate('Login', { name: 'Login' })}
                        >
                            <Text style={{
                                color: '#fff',
                                fontWeight: '700',
                                textAlign: 'center'
                            }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A19882'

    },
    // container0: {
    //     flex: 2,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    container1: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',


    },
    container2: {
        flex: 0.75,
    }
})