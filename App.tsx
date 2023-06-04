import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressScreen from './src/pages/Progress/Progress';
import HomeTabs from './src/pages/Home/HomeTabs';
import MapTabs from './src/pages/Map/MapTabs';

export type RootStackParamList = {
  Home: undefined;
  Progress: undefined;
  Settings: undefined;
  Map: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

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
          <Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={HomeTabs}
          />
          <Screen name="Progress" component={ProgressScreen} />
          <Screen
            name="Map"
            component={MapTabs}
            options={{
              headerShown: false,
            }}
          />
        </Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
