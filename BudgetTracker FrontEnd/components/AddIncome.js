import React, { Component } from 'react'
import {KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity, Image, TextInput, View, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class AddIncome extends Component {
    constructor() {
        super();
        this.state = {
            userId: '',
            amount: '',
            note: '',
            PickerSelectedVal: "Salary",
        };
    }
    static navigationOptions = {
        title: 'Main',
    };
    getData = async () => {
        try {
            const isLogedin = await AsyncStorage.getItem('isLogedIn')
            this.state.userId = await AsyncStorage.getItem('userId')
            console.log("isLogedin " + isLogedin);
            console.log("Active User " + this.state.userId);

        } catch (e) {
            // error reading value
            console.log(e);
        }
    }
    clearText = () => {
        this.setState({ amount: '' })
        this.setState({ note: '' })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container}>
                <KeyboardAvoidingView style={{
                    flex:1,
                    height: 1000,
                    width: '100%',
                    backgroundColor: '#fff',
                    marginTop: 100,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }}>
                    <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => navigate('Home', { name: 'Home' })}
                        >
                            <Image
                                resizeMode='contain'
                                style={{
                                    width: 50,
                                    height: 50
                                }}
                                source={require('../assests/icons8-macos-close-48.png')} />
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: '700',
                            marginLeft: 50,
                        }}>Add Income</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 10 }}>
                        <View style={{
                            height: 50,
                            width: 100,
                            backgroundColor: '#26de81',
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 15
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 28,
                                fontWeight: '700',
                            }}>LKR</Text>
                        </View>
                        <TextInput
                            placeholder='Income Amount '
                            keyboardType='numeric'
                            style={{
                                fontSize: 28,
                                marginLeft: 10,
                                padding: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: '#000'
                            }}
                            onChangeText={(value) => this.setState({ amount: value })}
                            value={this.state.amount}
                        >
                        </TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 10 }}>
                        <Image
                            resizeMode='contain'
                            style={{
                                width: 50,
                                height: 50,
                                marginTop: 15
                            }}
                            source={require('../assests/note.png')} />
                        <TextInput
                            placeholder='Note'
                            style={{
                                width: '80%',
                                fontSize: 18,
                                marginLeft: 10,
                                padding: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: '#000',
                            }}
                            onChangeText={(value) => this.setState({ note: value })}
                            value={this.state.note}
                        >
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 20, padding: 10, alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '700',
                            }}>
                            Select Catagory
                        </Text>
                    </View>
                    
                    <View>
                    <Picker
                        style={{
                            fontSize: 25,
                            fontWeight: '700',
                            padding: 10,
                            margin: 10
                        }}
                        selectedValue={this.state.PickerSelectedVal }
                        onValueChange={(value) => 
                            this.setState({ PickerSelectedVal: value })
                        } >

                        <Picker.Item label="Salary" value="Salary" />
                        <Picker.Item label="Deposits" value="Deposits" />
                        <Picker.Item label="Savings" value="Savings" />
                    </Picker>
                    </View>
                    <View>
                    <TouchableOpacity style={{
                        marginTop: 40,
                        margin: 20,
                        padding: 15,
                        backgroundColor: '#26de81',
                        borderRadius: 20
                    }
                    }
                    onPress={() => {
                        fetch('http://192.168.1.103:3010/income', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                user:this.state.userId,
                                amount:this.state.amount,
                                note:this.state.note,
                                catagory:this.state.PickerSelectedVal,
                                type:"Income"
                            })
                            
                        })
                        .then((response) => response.json())
                        .then((json) => {
                            if (json) {
                                Alert.alert(
                                    "Cash Book",
                                    "Income Added..!",
                                    [
                                        {
                                            text: "Cancel",
                                            onPress: () => console.log("Cancel Pressed"),
                                            style: "cancel"
                                        },
                                        { text: "OK", onPress: () => console.log("Ok Pressed") }
                                    ]
                                );
                                this.clearText()
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            Alert.alert(
                                "Error..!",
                                "Please enter Valid Details",
                                [
                                    { text: "OK", onPress: () => navigate('Add Income', { name: 'AddIncome' }) }
                                ]
                            );
                        })
                    }
                    }
                    >
                        <Text
                            style={{
                                fontSize: 30,
                                fontWeight: '700',
                                textAlign: 'center'
                            }}>+Add Income</Text>
                    </TouchableOpacity>
                    </View>
                  
                    
                   {/* <View>
                   <TextInput
                            placeholder='Income Amount '
                            keyboardType='numeric'
                            style={{
                                fontSize: 28,
                                marginLeft: 10,
                                padding: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: '#000'
                            }}
                            onChangeText={(value) => this.setState({ amount: value })}
                            value={this.state.amount}
                        >
                        </TextInput>
                   </View> */}

                </KeyboardAvoidingView>
            </KeyboardAvoidingView>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#26de81'
    }
})