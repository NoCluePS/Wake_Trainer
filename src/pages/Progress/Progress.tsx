import React, { useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const ProgressScreen = () => {
  const [searchVal, setSearchVal] = useState('');

  return (
    <View className="flex-1 py-8 items-center bg-black">
      <Searchbar
        value={searchVal}
        onChangeText={(val) => setSearchVal(val)}
        className="w-[90%] bg-gray"
        placeholder="Search for different tricks!"
        iconColor="gray"
      />
    </View>
  );
};

export default ProgressScreen;
