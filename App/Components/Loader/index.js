import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Colors} from '../../Constants/Colors';

export const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color={Colors.black} />
    </View>
  );
};
