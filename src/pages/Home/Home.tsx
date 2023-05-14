import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useRecoilState, useRecoilValue } from 'recoil';
import CarouselCardItem from '../../components/CarouselCardItem';
import { Trick } from '../../types/types';
import { tricksState, userState } from '../../state/atoms';

const HomeScreen = () => {
  const { name } = useRecoilValue(userState);
  const [tricks, setTricks] = useRecoilState(tricksState);

  useEffect(() => {
    new Promise((res) => {
      setTimeout(() => {
        res(import('../../mock_data/tricks.json'));
      }, 1000);
    }).then((data) => {
      setTricks(data as Trick[]);
    });
  }, []);

  console.log(tricks);

  return (
    <View className="flex-1 bg-black bg-opacity-30 text-white">
      <Text className="text-white text-2xl m-5">Welcome, {name}</Text>
      <View>
        {tricks &&
          tricks.map((trick) => (
            <CarouselCardItem key={trick.id} trick={tricks[0]} />
          ))}
      </View>
    </View>
  );
};

export default HomeScreen;
