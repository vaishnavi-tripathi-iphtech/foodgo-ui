import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favourites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
},
  text: { 
    fontFamily: Platform.select({
      ios: 'Lobster-Regular', 
      android: 'lobster_regular', 
    }),
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#f44b58' 
},
});

export default Favourites;