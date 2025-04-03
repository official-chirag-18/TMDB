import {View, Image, Dimensions} from 'react-native';
import React from 'react';
import CommonComp from '../../../Components/CommonComp';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {EnvConfig} from '../../../Constants/EnvConfig';
import {TextComp} from '../../../Components/TextComp';
import {FormatDate} from '../../../Config/ConvertDateFormat';

import BackHeader from '../../../Components/BackHeader';
import {Colors} from '../../../Constants/Colors';

const ViewDetails = ({navigation, route}) => {
  const data = route?.params?.data;
  const {width} = Dimensions.get('screen');

  return (
    <CommonComp>
      <BackHeader navigation={navigation} />

      <View
        style={{
          marginVertical: 10,
        }}>
        <Image
          source={{
            uri: `${EnvConfig?.imgBaseUrl}${data?.poster_path}`,
          }}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <View style={{marginTop: 20}}>
          <TextComp
            text={data?.title}
            customStyle={{
              fontSize: 24,
              fontWeight: 600,
            }}
          />
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextComp
              text={`${FormatDate(data?.release_date)}`}
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
                text={data?.vote_average?.toFixed(1)}
                customStyle={{
                  fontSize: 12,
                  marginLeft: 5,
                  color: Colors.textGray,
                }}
              />
            </View>
          </View>

          <View style={{marginTop: 20}}>
            <TextComp
              text={'Description'}
              customStyle={{
                fontSize: 24,
                fontWeight: 600,
              }}
            />
            <TextComp
              text={data?.overview}
              customStyle={{
                fontSize: 12,
                color: Colors.textGray,
                marginTop: 5,
              }}
            />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderColor: Colors.stroke,
              padding: 10,
              borderRadius: 10,
            }}>
            {[
              {label: 'Popularity', value: data?.popularity},
              {label: 'Likes', value: data?.vote_count},
            ].map((item, index) => (
              <View key={index}>
                <TextComp text={item?.label} customStyle={{}} />
                <TextComp
                  text={item?.value?.toFixed(0)}
                  customStyle={{fontWeight: '600'}}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </CommonComp>
  );
};

export default ViewDetails;
