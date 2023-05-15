import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import HomeScreen from './src/pages/Home/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressScreen from './src/pages/Progress/Progress';
import SettingsScreen from './src/pages/Settings/Settings';
import MapScreen from './src/pages/Map/Map';

const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName = 'home';
              let rn = route.name;

              switch (rn) {
                case 'Home':
                  iconName = focused ? 'home' : 'home-outline';
                  break;
                case 'Progress':
                  iconName = 'map-marker-path';
                  break;
                case 'Settings':
                  iconName = focused ? 'cog' : 'cog-outline';
                  break;
                case 'Map':
                  iconName = focused ? 'map' : 'map-outline';
                  break;
              }

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={30}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: '#23395d',
            headerTitleStyle: {
              color: '#FFF',
            },
            tabBarStyle: {
              backgroundColor: '#000',
              borderTopColor: '#000',
            },
            headerStyle: {
              backgroundColor: '#23395d',
            },
          })}
        >
          <Screen name="Home" component={HomeScreen} />
          <Screen name="Progress" component={ProgressScreen} />
          <Screen
            name="Map"
            component={MapScreen}
            options={{
              headerShown: false,
            }}
          />
          <Screen name="Settings" component={SettingsScreen} />
        </Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
