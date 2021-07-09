import React, {Component} from 'react';
import {
    Spinner,
    HStack,
    Heading,
    Center,
    NativeBaseProvider,
  } from "native-base"


export default class LaunchScreen extends Component {
    constructor(props) {
        super(props);
    }

render(){
    const { navigate } = this.props.navigation;
    return(
        <NativeBaseProvider>
            <Center flex={1}>
            <HStack space={2}>
                <Heading color="primary.300">Spinner</Heading>
                <Spinner accessibilityLabel="Loading posts" />
            </HStack>
            </Center>
        </NativeBaseProvider>
    )
}
}
