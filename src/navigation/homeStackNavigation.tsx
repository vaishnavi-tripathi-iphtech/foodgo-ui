import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/tabs/homescreen';
import ProductDetailScreen from '../screens/tabs/productdetailsscreen';

export type HomeStackParamList = {
  Home: undefined;
  ProductDetails: {
    product: {
      id: string;
      title: string;
      subtitle: string;
      imageUrl: any;
      ratings: number;
      aboutproduct: string;
      price: string;
    };
  };
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
  </Stack.Navigator>
);

export default HomeStackNavigator;
