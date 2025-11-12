import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    fontFamily: 'Lobster-Regular',
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#f44b58' 
},
});

export default Favourites;