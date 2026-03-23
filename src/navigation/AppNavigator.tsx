import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Phase1Screen from '../screens/Phase1Screen';
import Phase2Screen from '../screens/Phase2Screen';
import Phase3Screen from '../screens/Phase3Screen';
import Phase4Screen from '../screens/Phase4Screen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Phase1Stack" component={Phase1Screen} />
        <Stack.Screen name="Phase2Screen" component={Phase2Screen} />
        <Stack.Screen name="Phase3Screen" component={Phase3Screen} />
        <Stack.Screen name="Phase4Screen" component={Phase4Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
