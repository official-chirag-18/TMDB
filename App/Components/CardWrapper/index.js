import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../Constants/Colors';

const CardWrapper = ({children, customStyle}) => {
  return (
    <View
      style={{
        ...customStyle,
        borderRadius: 10,
        // padding: 10,
        borderColor: Colors.stroke,
        borderWidth: 1,
        backgroundColor: Colors.white,
      }}>
      {children}
    </View>
  );
};

export default CardWrapper;
