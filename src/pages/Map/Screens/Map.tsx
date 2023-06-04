import React, { FC, useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { Searchbar } from 'react-native-paper';
import parkData from '../../../mock_data/parks.json';
import CustomMarker from '../../../components/CustomMarker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MapTabProps } from '../MapTabs';

const MapScreen: FC<NativeStackScreenProps<MapTabProps, 'Map'>> = ({
  navigation,
}) => {
  const [searchVal, setSearchVal] = useState('');

  return (
    <View className="flex-1">
      <View className="flex items-center w-full absolute z-50 top-[7%]">
        <Searchbar
          value={searchVal}
          onChangeText={(val) => setSearchVal(val)}
          className="w-[90%] bg-black"
          placeholder="Search for wake parks!"
          iconColor="gray"
          inputStyle={{ color: '#FFF' }}
          placeholderTextColor="#999"
        />
      </View>
      <MapView
        initialRegion={{
          latitude: 54.6872,
          longitude: 25.2797,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        minZoomLevel={9}
        className="w-full h-full z-10"
      >
        {parkData.map((park) => (
          <CustomMarker
            onPress={() => navigation.navigate('ParkDetail', { id: park.id })}
            key={park.name}
            {...park}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;
