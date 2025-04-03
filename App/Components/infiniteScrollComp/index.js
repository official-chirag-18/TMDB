import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../Constants/Colors';
import {useAxios} from '../../Config/RoutesFetch/useAxios';
import {EnvConfig} from '../../Constants/EnvConfig';
import {TextComp} from '../TextComp';
import RouteWaiter from '../RouteWaiter';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InfiniteScrollComp = ({url, renderItem}) => {
  const {loading, error, data, request} = useAxios();

  const [dataStoreForPagination, setDataStoreForPagination] = useState([]);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    fetchNowPlayingData(1);
  }, []);

  const fetchNowPlayingData = async page => {
    await request({
      method: 'GET',
      url: url(page),
      headers: {
        Authorization: EnvConfig?.ApiKey,
      },
      makeLoading: page === 1 ? true : false,
    })
      .then(res => {
        setPageNumber(page + 1);
        setDataStoreForPagination([...dataStoreForPagination, ...res?.results]);
        setTotalPage(res?.total_pages);
      })
      .finally(() => {
        setIsMoreLoading(false);
      });
  };

  const renderFooter = () => {
    if (error && dataStoreForPagination.length !== 0)
      return (
        <ErrorLoadMoreComp
          handleLoadMore={() => {
            setIsMoreLoading(true);
            fetchNowPlayingData(pageNumber);
          }}
        />
      );

    if (!isMoreLoading) return null;

    return (
      <View
        style={{
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={'small'} color={Colors.black} />
      </View>
    );
  };

  const ErrorLoadMoreComp = ({handleLoadMore}) => {
    return (
      <TouchableOpacity
        onPress={handleLoadMore}
        style={{margin: 10, alignItems: 'center'}}>
        <Ionicons name="reload-circle" size={20} color={Colors.aiqaRed} />
      </TouchableOpacity>
    );
  };

  return (
    <RouteWaiter
      loading={loading}
      error={error}
      data={dataStoreForPagination}
      children={
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataStoreForPagination}
          keyExtractor={(item, index) => index}
          onEndReachedThreshold={0.2}
          onEndReached={() => {
            if (totalPage >= pageNumber) {
              setIsMoreLoading(true);
              fetchNowPlayingData(pageNumber);
            }
          }}
          ListFooterComponent={renderFooter}
          renderItem={({item, index}) => renderItem({item, index})}
        />
      }
    />
  );
};

export default InfiniteScrollComp;
