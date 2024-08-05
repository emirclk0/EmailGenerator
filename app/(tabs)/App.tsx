import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Generator from './generator';

export type RootStackParamList = {
  Login: undefined;
  Generator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Generator" component={Generator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
