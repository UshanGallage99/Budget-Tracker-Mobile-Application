import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import {Picker} from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AddExpense extends Component {
    constructor() {
        super();
        this.state = {
            userId: '',
            amount: '',
            note: '',
            PickerSelectedVal : 'Bills'
        };
      }
    static navigationOptions = {
        title: 'Main',
    };
    componentDidMount() {
        this.getData()
    }
    getData = async () => {
        try {
            const isLogedin = await AsyncStorage.getItem('isLogedIn')
            this.state.userId = await AsyncStorage.getItem('userId')
            console.log("isLogedin " + isLogedin);
            console.log("Active User " + user);

            this.setState({ userId: user })
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
            <View style={styles.container}>
                <View style={{
                    height: 1000,
                    width: '100%',
                    backgroundColor: '#fff',
                    marginTop: 50,
                    borderTopLeftRadius: 45,
                    borderTopRightRadius: 45,
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
                            marginLeft: 30,
                            letterSpacing: 3
                        }}>Expense Management</Text>
                    </View>


                    <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 10 }}>
                          <Image
                                resizeMode='contain'
                                style={{
                                    width: 45,
                                    height: 45,
                                    position: 'absolute',
                                    top:33,
                                    left:17
                                }}
                                source={require('../assests/cash.png')} />
                        <TextInput
                             placeholder='Expense Amount (LKR) '
                             placeholderTextColor="#C2B8A3"
                             keyboardType='numeric'
                             style={{
                                 fontSize: 20,
                                 marginLeft: 70,
                                 color: '#000',
                                 width: 250,
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
                                width: 35,
                                height: 35,
                                marginTop: 15,
                                position: 'absolute',
                                top:20,
                                left:20
                            }}
                            source={require('../assests/note.png')} />
                        <TextInput
                            placeholder='Note'
                            placeholderTextColor="#C2B8A3"
                            style={{
                                width: '75%',
                                fontSize: 20,
                                color: '#000',
                                marginLeft: 72,
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
                                fontSize: 15,
                                letterSpacing: 3,
                                fontWeight: '700',
                            }}>
                            Date
                        </Text>
                         
                        <TextInput
                            placeholder=''
                            placeholderTextColor="#C2B8A3"
                            style={{
                                 textAlign: 'center',
                                width: '90%',
                                fontSize: 20,
                                color: '#000',
                                marginLeft: 3,
                                padding: 5,
                                borderBottomWidth: 1,
                                borderBottomColor: '#000',
                            }}
                            // onChangeText={(value) => this.setState({ note: value })}
                            // value={this.state.note}
                        >
                        </TextInput>
                    </View>
                    <View style={{ marginTop:20, padding:10,alignItems:'center' }}>
                        <Text
                        style={{
                            fontSize: 15,
                            letterSpacing: 3,
                            fontWeight: '700',
                        }}>
                    Select Catagory
                        </Text>
                    </View>
                    <View style={{
                        borderColor: 'black',
                        borderWidth:1,
                        borderRadius:10,
                        width:'85%',
                        position: 'relative',
                        left:30
                    }}>
                    <Picker
                     style={{
                        fontSize: 20,
                        fontWeight: '700',
                        padding:10,
                        margin: 1,
                         
                     }}
                        selectedValue={this.state.PickerSelectedVal}
                        onValueChange={(value) =>
                         this.setState({ PickerSelectedVal: value })
                        } >                        
                        
                        <Picker.Item label="Bills" value="Bills" />
                        <Picker.Item label="Food" value="Food" />
                        <Picker.Item label="Car" value="Car" />
                        <Picker.Item label="Clothes" value="Clothes" />
                        <Picker.Item label="House" value="House" />
                        <Picker.Item label="Transport" value="Transport" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                    </View>
                    <TouchableOpacity style={{
                        marginTop: 170,
                        margin: 20,
                        padding: 15,
                        backgroundColor: '#B34180',
                        borderRadius: 30,
                        height:55
                    }
                    }
                    onPress={() => {
                         
                        fetch('http://192.168.1.103:3010/expense', {
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
                                type:"Expense"
                            })
                            
                        })
                        .then((response) => response.json())
                        .then((json) => {
                            if (json) {
                                Alert.alert(
                                     
                                    "Expense Successfuly Added..!",
                                    [
                                        { text: "OK", onPress: () => console.log("Ok Pressed") }
                                    ]
                                );
                                this.clearText()
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            Alert.alert(
                                 
                                "Please enter Valid Details..!",
                                [
                                    { text: "OK", onPress: () => navigate('AddExpense', { name: 'AddExpense' }) }
                                ]
                            );
                        })
                    }
                    }
                    >
                        <Text
                        style={{
                            fontSize: 25,
                                fontWeight: '700',
                                position: 'relative',
                                bottom: 5,
                                letterSpacing:3,
                                color: '#fff',
                                textAlign: 'center'
                        }}>Add Expense</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#350B40'
    }
})