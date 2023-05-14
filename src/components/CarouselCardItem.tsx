import React, { FC } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';
import { Trick } from '../types/types';

const { Title, Cover } = Card;

interface CardItemProps {
  trick: Trick;
}

const CarouselCardItem: FC<CardItemProps> = ({ trick }) => {
  const { name, image } = trick;

  return (
    <Card>
      <Cover source={{ uri: image }} />
      <Title title={name} />
    </Card>
  );
};

export default CarouselCardItem;
