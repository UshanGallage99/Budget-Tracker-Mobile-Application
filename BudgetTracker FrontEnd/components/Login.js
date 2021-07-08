import React, { Component } from 'react'
import { KeyboardAvoidingView, TextInput, StyleSheet, Text, TouchableOpacity, View,Alert, Image, Heading, NativeBaseProvider, Center, HStack, Spinner, useToast } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from 'react-native-reanimated';
 

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    clearText = () => {
        this.setState({ email: '' })
        this.setState({ password: '' })
    }
     
    
    render() {
        const { navigate } = this.props.navigation;
         
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.container1}>
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
                <Image
                    resizeMode='contain'
                    style={{
                    width: 100,
                    height: 100,
                    marginTop: 10,
                    position: 'absolute',
                    top:180
                    }}
                    source={require('../assests/man.png')} />
                    <TextInput
                        placeholder='Email'
                        style={{
                            width: '85%',
                            fontSize: 15,
                            marginLeft: 10,
                            padding: 10,
                            letterSpacing: 3,
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
                        style={{
                            width: '85%',
                            fontSize: 15,
                            marginLeft: 10,
                            padding: 10,
                            letterSpacing: 3,
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
                            fetch('http://192.168.1.103:3010/user?email=' + this.state.email + "&password=" + this.state.password, {
                                method: 'GET',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json'
                                },
                            })
                                .then((response) => response.json())
                                .then((json) => {
                                    if (json) {
                                        AsyncStorage.setItem('isLogedIn', "true")
                                        AsyncStorage.setItem('userId', json._id)
                                        console.log(json._id);
                                        navigate('Home', { name: 'Home' })
                                        this.clearText();
                                    } else {
                                        Alert.alert(
                                             
                                            "Email Or Password is invalid",
                                            [
                                                { text: "OK", onPress: () => navigate('Login', { name: 'Login' }) }
                                            ]
                                        );
                                         
                                             
                                          
                                    }
                                })
                                .catch((error) => {
                                    Alert.alert(
                                        
                                        "Email is not valid, Please Enter valid Email",
                                        [
                                            { text: "OK", onPress: () => navigate('Login', { name: 'Login' }) }
                                        ]
                                    );
                                })
                             
                        }
                        }
                        style={{
                            marginTop: 35,
                            width: '85%',
                            height: 50,
                            marginLeft: 10,
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
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <View style={{
                        flexDirection: 'row', marginTop: 100,
                        justifyContent: 'center'
                    }}
                    >
                        <Text style={{
                            color: '#423F3E',
                            paddingRight: 15
                        }}>
                            Don't have an account ?
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigate('SignUp', { name: 'SignUp' })}
                        >
                            <Text style={{
                                color: '#fff',
                                fontWeight: '700',
                                textAlign: 'center'
                            }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>

        )
    }

     
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A19882'

    }, container1: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    container2: {
        flex: 1,
    }
})