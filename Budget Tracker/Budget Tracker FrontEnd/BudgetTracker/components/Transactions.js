import React, { Component } from 'react'
import {KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity, Image, TextInput, View, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { Table, TableWrapper, Row } from 'react-native-table-component';
 



export default class InTransactions extends Component {
    constructor(props) {
        super(props);
        this.getData()
        this.state = {
            name:'',
          userId: '',
          balance:"LKR 0.00",
           
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
          const userId = await AsyncStorage.getItem('userId')
          const name = await AsyncStorage.getItem('name')
          console.log("isLogedin " + isLogedin);
          console.log("Active User " + userId);
          console.log("Active User " + name);
          
    
          if (isLogedin == null) {
            this.props.navigation.navigate("Login");
          } else {
            this.setState({ userId: userId })
            this.getTotalIncome()
          }
    
        } catch (e) {
          console.log(e);
        }
      }
      getTotalIncome = async () => {
        let incomeTot = 0;
        let expenseTot = 0;
        let final = 0;
        fetch('http://192.168.1.103:3010/income?user=' + this.state.userId, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        })
          .then((response) => response.json())
          .then((json) => {
             
              console.log("In      "+json);
              incomeTot=json;
              
              this.setState({balance: "LKR "+ final + ".00"})
              fetch('http://192.168.1.103:3010/expense?user=' + this.state.userId, {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
              })
                .then((response) => response.json())
                .then((json) => {
                  
                    console.log("Ex   "+json);
                    expenseTot=json;
                    final = incomeTot-expenseTot;
                    this.setState({balance: "LKR "+ final + ".00"})
             
                })
                .catch((error) => {
                  console.log(error);
                })
            
          })
          .catch((error) => {
            console.log(error);
          })
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
                        }}>Transactions</Text>
                    </View>
                    <View style={{ 
                            flexDirection: 'row', 
                            paddingTop: 20, 
                            paddingLeft: 10,                         
                            width: 370,
                            height: 200,
                            backgroundColor: '#000',
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            opacity: 0.8,
                            position: 'relative',
                            top: 10,
                            left: 20 
                             
                        
                }}>
                    <Text
                     style={{
                        color: '#fff',
                        fontSize: 20,
                        letterSpacing:3,
                        fontWeight: '600',
                        position: 'relative',
                        bottom: 77,
                        left: -10
                         }}>
                        Balance
                    </Text>
                    <Text
                        style={{
                        color: '#fff',
                        fontSize: 45,
                        fontWeight: '700',
                        position: 'relative',
                        top: 2,
                        left: -45
                        }}>
                             
                            {this.state.balance}
                        </Text>
                         
                    </View>

                </KeyboardAvoidingView>
            </KeyboardAvoidingView>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#350B40'
    }
})
 