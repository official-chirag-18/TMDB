import React from 'react';
import CommonComp from '../../../Components/CommonComp';
import {View} from 'react-native';
import InfiniteScrollComp from '../../../Components/infiniteScrollComp';
import ScreensHeader from '../../../Components/ScreensHeader';
import CardListComp from '../../../Components/CardListComp';

const Upcoming = ({navigation}) => {
  return (
    <CommonComp>
      <View style={{flex: 1}}>
        <ScreensHeader title={'Upcoming'} navigation={navigation} />

        <View style={{marginTop: 10, flex: 1}}>
          <InfiniteScrollComp
            url={page => `/upcoming?language=en-US&page=${page}`}
            renderItem={({item, index}) => {
              return <CardListComp item={item} navigation={navigation} />;
            }}
          />
        </View>
      </View>
    </CommonComp>
  );
};

export default Upcoming;
