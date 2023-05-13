import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/pages/Home/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressScreen from './src/pages/Progress/Progress';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName = 'home';
            let rn = route.name;

            if (rn === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === 'Progress') {
              iconName = 'map-marker-path';
            }

            return (
              <MaterialCommunityIcons name={iconName} size={30} color={color} />
            );
          },
          tabBarStyle: {
            backgroundColor: '#000',
          },
        })}
      >
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Progress" component={ProgressScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
