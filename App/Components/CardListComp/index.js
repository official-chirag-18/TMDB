import React from 'react';

import {EnvConfig} from '../../Constants/EnvConfig';
import {TextComp} from '../TextComp';
import CardWrapper from '../CardWrapper';
import {Image, TouchableOpacity, Dimensions, View} from 'react-native';
import {FormatDate} from '../../Config/ConvertDateFormat';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../Constants/Colors';

const CardListComp = ({item, navigation}) => {
  const {width} = Dimensions.get('screen');

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('ViewDetails', {
          data: item,
        });
      }}>
      <CardWrapper
        customStyle={{
          marginVertical: 10,
          flexDirection: 'row',
        }}>
        <Image
          source={{
            uri: `${EnvConfig?.imgBaseUrl}${item?.poster_path}`,
          }}
          style={{
            width: 80,
            resizeMode: 'cover',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        />
        <View
          style={{
            width: width - 130,
            justifyContent: 'center',
            margin: 15,
          }}>
          <TextComp
            text={item?.title}
            customStyle={{
              fontSize: 16,
              fontWeight: 600,
              width: '80%',
            }}
          />
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextComp
              text={`${FormatDate(item?.release_date)}`}
              customStyle={{
                fontSize: 12,
                color: Colors.textGray,
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <FontAwesome name="star" size={14} color={Colors.brightYellow} />
              <TextComp
                text={item?.vote_average?.toFixed(1)}
                customStyle={{
                  fontSize: 12,
                  marginLeft: 5,
                  color: Colors.textGray,
                }}
              />
            </View>
          </View>
        </View>
      </CardWrapper>
    </TouchableOpacity>
  );
};

export default CardListComp;
