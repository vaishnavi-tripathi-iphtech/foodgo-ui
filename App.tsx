import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/navigation/types';
import SplashScreen from './src/screens/splashscreen';
import LoginScreen from './src/screens/loginscreen';


import RegisterScreen from './src/screens/registerscreen';
import AppNavigator from './src/navigation/mainTabNavigation';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
   
   <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MainApp" component={AppNavigator} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;