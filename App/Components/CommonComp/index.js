import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {Colors} from '../../Constants/Colors';

const CommonComp = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <View style={{margin: 10, flex: 1}}>{children}</View>
    </SafeAreaView>
  );
};

export default CommonComp;
