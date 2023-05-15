import React, { useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { Searchbar } from 'react-native-paper';

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
        />
      </View>
      <MapView className="w-full h-full z-10" />
    </View>
  );
};

export default MapScreen;
