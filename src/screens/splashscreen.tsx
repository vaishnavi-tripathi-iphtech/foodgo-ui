import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

import { RootStackParamList } from '../navigation/types'; 

const burgerLarge = require('../assets/images/burger_large.png');
const burgerSmall = require('../assets/images/burger_small.png');

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(
        StackActions.replace('Login')
      );
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#FF939B', '#EF2A39']}
      style={styles.gradientContainer}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Foodgo</Text>
      </View>
      <Image source={burgerLarge} style={styles.burgerLarge} />
      <Image source={burgerSmall} style={styles.burgerSmall} />

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: -60 }], 
  },
  logoText: {
    fontFamily: Platform.select({
      ios: 'Lobster-Regular', 
      android: 'lobster_regular', 
    }),
    fontWeight: '400',
    fontSize: 60,
    lineHeight: 60,
    color: '#ffffff',
  },
  burgerLarge: {
    position: 'absolute',
    width: 220, 
    height: 260,
    resizeMode: 'contain',
    bottom: -10, 
    left: -20, 
  },
  burgerSmall: {
    position: 'absolute',
    width: 190, 
    height: 190, 
    resizeMode: 'contain',
    bottom: -15,
    right: 90, 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1.5,
    shadowRadius: 7,
  },
});

export default SplashScreen;