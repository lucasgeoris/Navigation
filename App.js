import { StyleSheet } from 'react-native';
/*
import A from './screens/A';
import B from './screens/B';
*/
import TabNavigator from './components/TabNavigator';
import RootNavigator from './screens/root';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Tabs" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="A" component={TabNavigator} />
        <Tab.Screen name="Root" component={RootNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});