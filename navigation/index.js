import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
// import Browse from "../screens/Browse";
// import Explore from "../screens/Explore";
// import Login from "../screens/Login";
// import Product from "../screens/Product";
// import Setting from "../screens/Setting";

import { theme } from '../constants';

defaultNavigationOptions: {
  headerStyle: {},
  headerBackImage: <Image />,
  headerBackTitle: null,
  headerLeftContainerStyle: {},
  headerRightContainerStyle: {},
},

const Stack = createStackNavigator();

export default function Navigation() {
  return(
    <NavigationContainer>
      <Stack.Navigation>
        <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Navigation />
    <NavigationContainer />
  );
}
