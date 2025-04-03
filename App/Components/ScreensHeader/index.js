import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreensModal from '../ScreensModal';
import {TextComp} from '../TextComp';

const ScreensHeader = ({title, navigation}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextComp
          text={title}
          customStyle={{
            fontSize: 36,
            fontWeight: 'bold',
            letterSpacing: 1,
          }}
        />

        <TouchableOpacity
          onPress={() => {
            setOpenModal(!openModal);
          }}>
          <MaterialCommunityIcons
            name={openModal ? 'chevron-up-circle' : 'chevron-down-circle'}
            size={36}
          />
        </TouchableOpacity>
      </View>

      <ScreensModal
        title={title}
        open={openModal}
        setOpen={setOpenModal}
        navigation={navigation}
      />
    </>
  );
};

export default ScreensHeader;
