import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomerSupport = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Customer Support Screen</Text>
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

export default CustomerSupport;