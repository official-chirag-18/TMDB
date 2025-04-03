import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const TextComp = ({text, customStyle, ...props}) => {
  return (
    <Text style={[{color: Colors.black, fontSize: 14}, customStyle]} {...props}>
      {text}
    </Text>
  );
};
