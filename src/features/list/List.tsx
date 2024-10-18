import {FlatList} from 'react-native';
import React from 'react';
import Card from '../../components/Card';
import {data} from './data';

const List = () => {
  const renderItem = ({item}: {item: {uri: string}}) => {
    return <Card {...item} />;
  };
  return (
    <FlatList
      keyExtractor={item => item.uri}
      data={data}
      renderItem={renderItem}
    />
  );
};

export default List;
