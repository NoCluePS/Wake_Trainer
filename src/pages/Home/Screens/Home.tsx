import React, { FC } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useRecoilValue } from 'recoil';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CarouselCardItem from '../../../components/CarouselCardItem';
import { tricksState, userState } from '../../../state/atoms';
import { HomeTabProps } from '../HomeTabs';

const HomeScreen: FC<NativeStackScreenProps<HomeTabProps, 'Home'>> = ({
  navigation,
}) => {
  const { name } = useRecoilValue(userState);
  const tricks = useRecoilValue(tricksState);

  return (
    <View className="flex-1 bg-black bg-opacity-30 text-white">
      <Text className="text-white text-3xl m-5">Welcome, {name}</Text>
      <Text className="text-white text-2xl m-3 mt-0">
        Learn some of these new tricks!
      </Text>
      <View className="flex-row">
        {tricks &&
          tricks.map(({ id, ...trick }) => (
            <CarouselCardItem
              onPress={() => navigation.navigate('TrickDetail', { id })}
              key={id}
              trick={{ id, ...trick }}
            />
          ))}
      </View>
    </View>
  );
};

export default HomeScreen;
