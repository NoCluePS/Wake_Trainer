import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useRecoilState, useRecoilValue } from 'recoil';
import CarouselCardItem from '../../components/CarouselCardItem';
import { Trick } from '../../types/types';
import { tricksState, userState } from '../../state/atoms';
import data1 from '../../mock_data/tricks.json';

const HomeScreen = () => {
  const { name } = useRecoilValue(userState);
  const [tricks, setTricks] = useRecoilState(tricksState);

  useEffect(() => {
    new Promise((res) => {
      setTimeout(() => {
        res(data1);
      }, 1000);
    }).then((data) => {
      setTricks(data as Trick[]);
    });
  }, []);

  return (
    <View className="flex-1 bg-black bg-opacity-30 text-white">
      <Text className="text-white text-3xl m-5">Welcome, {name}</Text>
      <Text className="text-white text-2xl m-3 mt-0">
        Learn some of these new tricks!
      </Text>
      <View className="flex-row">
        {tricks && tricks.map((trick) => <CarouselCardItem trick={trick} />)}
      </View>
    </View>
  );
};

export default HomeScreen;
