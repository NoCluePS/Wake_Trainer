import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-paper';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeTabProps } from '../HomeTabs';
import { tricksState } from '../../../state/atoms';
import { useRecoilValue } from 'recoil';
import { getSkillLevelText } from '../../../utils/utils';

type Props = NativeStackScreenProps<HomeTabProps, 'TrickDetail'>;

const TrickDetail: FC<Props> = ({ route }) => {
  const { id } = route.params;
  const tricks = useRecoilValue(tricksState);
  const detailTrick = tricks?.find((trick) => trick.id === id);

  if (!detailTrick) return null;

  const { image, name, skillLevel, description } = detailTrick;
  return (
    <View className="flex-1 bg-black">
      <Image className="w-full h-[25%]" source={{ uri: image }} />
      <View className="p-8 pt-5">
        <Text className="text-white text-xl mb-2">Name: {name}</Text>
        <Text className="text-white text-xl mb-2">
          Skill recommended: {getSkillLevelText(skillLevel)}
        </Text>
        <Text className="text-white text-xl">Details:</Text>
        <Text className="text-white ml-4 text-lg mt-2">{description}</Text>
      </View>
    </View>
  );
};

export default TrickDetail;
