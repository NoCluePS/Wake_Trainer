import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRecoilState } from 'recoil';
import { parkState } from '../../state/atoms';
import { Park } from '../../../src/types/types';
import parkData from '../../mock_data/parks.json';
import MapScreen from './Screens/Map';
import ParkDetailScreen from './Screens/ParkDetail';

export type MapTabProps = {
  Map: undefined;
  ParkDetail: { id: number };
};

const { Navigator, Screen } = createNativeStackNavigator<MapTabProps>();

const MapTabs = () => {
  const [parks, setParks] = useRecoilState(parkState);

  useEffect(() => {
    new Promise((res) => {
      setTimeout(() => {
        res(parkData);
      }, 1000);
    }).then((data) => {
      setParks(data as Park[]);
    });
  }, []);

  if (!parks) return null;

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
      <Screen
        name="Map"
        options={{ headerShown: false }}
        component={MapScreen}
      />
      <Screen
        name="ParkDetail"
        options={({ route }) => ({
          title: parks.find(({ id }) => id === route.params.id)!.name,
        })}
        component={ParkDetailScreen}
      />
    </Navigator>
  );
};

export default MapTabs;
