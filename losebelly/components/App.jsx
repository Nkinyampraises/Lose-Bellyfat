import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './SettingsScreen'; // Import your SettingsScreen
import HealthDataScreen from './HealthDataScreen'; // Create this component
import PrivacyScreen from './PrivacyScreen'; // Create this component
import UnitSelectorScreen from './UnitSelectorScreen'; // Create this component
import ReminderScreen from './ReminderScreen'; // Create this component

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="HealthDataScreen" component={HealthDataScreen} />
        <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
        <Stack.Screen name="UnitSelectorScreen" component={UnitSelectorScreen} />
        <Stack.Screen name="ReminderScreen" component={ReminderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;