import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NowPlaying from './NowPlaying';
import TopRated from './TopRated';
import Popular from './Popular';
import Upcoming from './Upcoming';
import ViewDetails from './ViewDetails';

const Stack = createStackNavigator();

const AppScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NowPlaying" component={NowPlaying} />
      <Stack.Screen name="TopRated" component={TopRated} />
      <Stack.Screen name="Popular" component={Popular} />
      <Stack.Screen name="Upcoming" component={Upcoming} />
      <Stack.Screen name="ViewDetails" component={ViewDetails} />
    </Stack.Navigator>
  );
};

export default AppScreen;
