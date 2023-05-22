import React, { useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { Searchbar } from 'react-native-paper';
import parkData from '../../mock_data/parks.json';
import CustomMarker from '../../components/CustomMarker';

const MapScreen = () => {
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
          <CustomMarker key={park.name} {...park} />
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;
