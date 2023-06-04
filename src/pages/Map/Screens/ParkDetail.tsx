import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';
import { MapTabProps } from '../MapTabs';
import { useRecoilValue } from 'recoil';
import { parkState } from '../../../state/atoms';

type Props = NativeStackScreenProps<MapTabProps, 'ParkDetail'>;

const ParkDetail: FC<Props> = ({ route }) => {
  const { id } = route.params;
  const parks = useRecoilValue(parkState);
  const detailPark = parks?.find((park) => park.id === id);

  if (!detailPark) return null;
  const { logo } = detailPark;

  return (
    <View className="flex-1 bg-black p-5">
      <Image className="w-[100px] h-[100px]" source={{ uri: logo }} />
    </View>
  );
};

export default ParkDetail;
