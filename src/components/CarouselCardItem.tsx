import React, { FC } from 'react';
import { Card } from 'react-native-paper';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Trick } from '../types/types';
import { getSkillLevelText } from '../utils/utils';

const { Title, Cover, Content } = Card;

interface CardItemProps {
  trick: Trick;
  onPress: any;
}

const CarouselCardItem: FC<CardItemProps> = ({ trick, onPress }) => {
  const { name, image, skillLevel } = trick;

  return (
    <Card
      mode="elevated"
      style={{ backgroundColor: '#222', width: '40%', margin: 5 }}
      onPress={onPress}
    >
      <Cover source={{ uri: image }} />
      <Title title={name} titleStyle={{ color: '#FFF' }} />
      <Content style={{ marginTop: -10 }}>
        <Text className="text-white">
          <MaterialCommunityIcons name="account" size={15} />:{' '}
          {getSkillLevelText(skillLevel)}
        </Text>
      </Content>
    </Card>
  );
};

export default CarouselCardItem;
