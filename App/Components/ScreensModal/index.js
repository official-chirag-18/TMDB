import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {Colors} from '../../Constants/Colors';
import {TextComp} from '../TextComp';

const ScreensModal = ({title, open, setOpen, navigation}) => {
  const screensData = [
    {label: 'Now Playing', navigatiorName: 'NowPlaying'},
    {label: 'Popular', navigatiorName: 'Popular'},
    {label: 'Top Rated', navigatiorName: 'TopRated'},
    {label: 'Upcoming', navigatiorName: 'Upcoming'},
  ];

  return (
    <Modal
      isVisible={open}
      backdropOpacity={0.1}
      backdropColor={Colors.white}
      animationIn={'slideInDown'}
      animationOut={'slideOutUp'}
      onBackdropPress={() => {
        setOpen(false);
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: 100,
          backgroundColor: Colors.backDropBlack,
          marginHorizontal: -20,
        }}>
        <View
          style={{
            backgroundColor: Colors.white,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingTop: 10,
          }}>
          {screensData?.map((item, index) => {
            return title === item?.label ? null : (
              <TouchableOpacity
                activeOpacity={0.3}
                onPress={() => {
                  setOpen(false);
                  setTimeout(() => {
                    navigation.replace(item?.navigatiorName);
                  }, 100);
                }}
                key={index}
                style={{
                  marginVertical: 5,
                  borderTopWidth: 1,
                  borderColor: Colors?.stroke,
                }}>
                <TextComp
                  text={item?.label}
                  customStyle={{
                    fontSize: 36,
                    fontWeight: 'bold',
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ScreensModal;
