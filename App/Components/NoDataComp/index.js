import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../Constants/Colors';
import {TextComp} from '../TextComp';

const NoDataComp = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextComp text={'klklk'} />
    </View>
  );
};

export default NoDataComp;
