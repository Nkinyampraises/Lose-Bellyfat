import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './screens/SettingsScreen'; // Adjust path
import HealthData from './screens/HealthData'; // Adjust path
import PrivacyPolicy from './screens/PrivacyPolicy'; // Adjust path

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Settings">
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="HealthData" component={HealthData} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;