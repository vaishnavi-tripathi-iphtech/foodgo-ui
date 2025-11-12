import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';

const Card = ({ title, imageUrl, children }: any) => {
  return (
    <View style={styles.cardContainer}>
      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
      {title && (
        <Text style={styles.title}>{title}</Text>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffffff',
    borderRadius: 12,
    overflow: 'hidden', // Ensures the image corners are also rounded
    width: '100%', // The card will fill the container it's placed in
    height: '100%',
    
    // Platform-specific shadows
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default Card;