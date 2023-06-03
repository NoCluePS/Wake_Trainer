import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home';
import TrickDetail from './Screens/TrickDetail';
import { useRecoilState } from 'recoil';
import { tricksState } from '../../state/atoms';
import { Trick } from 'src/types/types';
import trickData from '../../mock_data/tricks.json';

export type HomeTabProps = {
  Home: undefined;
  TrickDetail: { id: number };
};

const { Navigator, Screen } = createNativeStackNavigator<HomeTabProps>();

const HomeTabs = () => {
  const [tricks, setTricks] = useRecoilState(tricksState);

  useEffect(() => {
    new Promise((res) => {
      setTimeout(() => {
        res(trickData);
      }, 1000);
    }).then((data) => {
      setTricks(data as Trick[]);
    });
  }, []);

  if (!tricks) return null;

  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#23395d',
        },
        headerTitleStyle: {
          color: '#FFF',
        },
      }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen
        name="TrickDetail"
        options={({ route }) => ({
          title: tricks.find(({ id }) => id === route.params.id)!.name,
        })}
        component={TrickDetail}
      />
    </Navigator>
  );
};

export default HomeTabs;
