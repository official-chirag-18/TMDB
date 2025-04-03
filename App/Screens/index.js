import React from 'react';
import AppScreen from './AppScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppScreen" component={AppScreen} />
    </Stack.Navigator>
  );
};

export default Screens;
