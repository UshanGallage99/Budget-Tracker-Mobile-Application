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
                style=
                  {{ 
                    height: 30, 
                    width: 30 
                  }}
                source={require('../assests/menu.png')}
              />
              <Image
                    resizeMode='contain'
                    style={{
                    width: 40,
                    height: 40,
                     
                    position: 'absolute',
                    top:10,
                    left:335
                    }}
                    source={require('../assests/weather.png')} />
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

        <View style={{ 
          padding: 30,
          height: 120,
          width: '100%',
                       
          }}>
          <Text
            style={{
              color: '#fff',
              position: 'relative',
              top: -25,
              fontSize: 22,
              fontWeight: '600',
              
            }}
          >
            Hi,
          </Text>
          <Text
            style={{
              color: '#fff',
              position: 'relative',
              top: -25,
              fontSize: 35,
              fontWeight: '600',
            }}
          >
            Ushan
          </Text>
          <Text
            style={{
              color: '#BD9354',
              position: 'relative',
              top: -25,
              fontSize: 15,
              fontWeight: '300',
            }}
          >
            Welcome back to budget tracker
          </Text>
        </View>
        <View style={{
          height: 900,
          width: '100%',
          backgroundColor: '#fff',
          borderTopLeftRadius: 45,
          borderTopRightRadius: 45,
        }}>
          <View style={{ flexDirection: 'row', paddingTop: 40, justifyContent: 'space-around' }}>
            <TouchableOpacity
              onPress={() => navigate('AddIncome', { name: 'AddIncome' })}
              style={{
                width: 150,
                height: 200,
                backgroundColor: '#000',
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                opacity: 0.8,
                position: 'relative',
                top: 10,
                left: 50 
                 
              }}
            >
              <Image
                    resizeMode='contain'
                    style={{
                    width: 50,
                    height: 50,
                     
                    position: 'absolute',
                    top:60,
                    left:50
                    }}
                    source={require('../assests/income.png')} />
              <Text style={{
                 color: '#fff',
                fontWeight: '700',
                textAlign: 'center',
                letterSpacing: 3,
                position: 'absolute',
                 top:120,
                 left:45
              }}>
                Income
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('AddExpense', { name: 'AddExpense' })}
              style={{
                width: 150,
                height: 200,
                backgroundColor: '#000',
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                color: 'white',
                opacity: 0.8,
                position: 'relative',
                top: 10,
                left: 150 
                
              }}
            >
               <Image
                    resizeMode='contain'
                    style={{
                    width: 40,
                    height: 40,
                     
                    position: 'absolute',
                    top:60,
                    left:55
                    }}
                    source={require('../assests/cost.png')} />

              <Text style={{
                 color: '#fff',
                fontWeight: '700',
                textAlign: 'center',
                 letterSpacing: 3,
                 position: 'absolute',
                 top:120,
                 left:40
              }}>
                Expense
               </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('AddIncome', { name: 'AddIncome' })}
              style={{
                width: 150,
                height: 200,
                backgroundColor: '#000',
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                opacity: 0.8,
                position: 'relative',
                top: 250,
                right: 155 
                 
              }}
            >
              <Image
                    resizeMode='contain'
                    style={{
                    width: 40,
                    height: 40,
                     
                    position: 'absolute',
                    top:60,
                    left:58
                    }}
                    source={require('../assests/calander.png')} />
              <Text style={{
                 color: '#fff',
                fontWeight: '700',
                textAlign: 'center',
                letterSpacing: 3,
                position: 'absolute',
                 top:120,
                 left:45
              }}>
                Clander
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('AddIncome', { name: 'AddIncome' })}
              style={{
                width: 150,
                height: 200,
                backgroundColor: '#000',
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                opacity: 0.8,
                position: 'relative',
                top: 250,
                right: 55 
                 
              }}
            >
              <Image
                    resizeMode='contain'
                    style={{
                    width: 45,
                    height: 45,
                     
                    position: 'absolute',
                    top:60,
                    left:55
                    }}
                    source={require('../assests/chart.png')} />
              <Text style={{
                 color: '#fff',
                fontWeight: '700',
                textAlign: 'center',
                letterSpacing: 3,
                position: 'absolute',
                 top:120,
                 left:45
              }}>
                Charts
              </Text>
            </TouchableOpacity>
          </View>
          <Image
                    resizeMode='contain'
                    style={{
                    width: 30,
                    height: 30,
                    marginTop: 10,
                    position: 'absolute',
                    top:550,
                    left:80
                    }}
                    source={require('../assests/logo.png')} />
                <Text style={{
                            color: '#000',
                            fontSize: 25,
                            letterSpacing: 3,
                            position: 'absolute',
                            top:560,
                            left:125,
                            textAlign: 'center'
                            
                        }}>
                            Budget Tracker
                        </Text>
        </View>
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#350B40',
     
  }
})