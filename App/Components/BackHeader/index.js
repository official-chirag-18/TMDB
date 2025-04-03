import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../Constants/Colors';

const BackHeader = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Ionicons name="arrow-back" size={24} color={Colors.black} />
    </TouchableOpacity>
  );
};

export default BackHeader;
