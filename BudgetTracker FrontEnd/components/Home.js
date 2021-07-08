import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

import { DrawerActions } from '@react-navigation/drawer';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: ' Main',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ paddingTop: 10 }}>
          <View style={{ flexDirection: 'row', marginHorizontal: 15, marginBottom: 20, justifyContent: 'space-between' }}>
            <TouchableOpacity 
              onPress={() => navigate.dispatch(DrawerActions.toggleDrawer())}
            >
              <Image
                resizeMode='contain'
                style={{ height: 40, width: 40 }}
                source={require('../assests/menu.png')}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{
                borderRadius: 100, borderWidth: 5,
                borderColor: '#00192D'
              }}>
              <Image
                resizeMode='contain'
                style={{
                  height: 35, width: 35,
                }}
                source={require('../assests/profile.png')}
              />
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={{ padding: 30 }}>
          <Text
            style={{
              color: '#000',
              fontSize: 26,
              fontWeight: '600',
            }}
          >
            My Budget
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 47,
              fontWeight: '700',
            }}
          >
            LKR 52,410
          </Text>
        </View>
        <View style={{
          height: 900,
          width: '100%',
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}>
          <View style={{ flexDirection: 'row', paddingTop: 40, justifyContent: 'space-around' }}>
            <TouchableOpacity
              onPress={() => navigate('AddIncome', { name: 'AddIncome' })}
              style={{
                width: 150,
                height: 150,
                backgroundColor: '#fff',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 8,
                borderColor: '#26de81',
              }}
            >
              <Text style={{
                color: '#000',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                INCOME
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('AddExpense', { name: 'AddExpense' })}
              style={{
                width: 150,
                height: 150,
                backgroundColor: '#fff',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 8,
                borderColor: '#fc5c65',
              }}
            >
              <Text style={{
                color: '#000',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                EXPENSE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc048'
  }
})