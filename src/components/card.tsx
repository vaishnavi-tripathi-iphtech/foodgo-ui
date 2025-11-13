import React, { PropsWithChildren } from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type CardProps = PropsWithChildren<{
  title?: string;
  imageUrl?: ImageSourcePropType;
  subtitle?: string;
  ratings?: number;
}>;

const Card = ({ title, imageUrl, subtitle, ratings }: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      {imageUrl && (
        <Image source={imageUrl} style={styles.image} />
      )}
      {title && (
        <Text style={styles.title}>{title}</Text>
      )}
      {subtitle && (
        <Text style={styles.subtitle}>{subtitle}</Text>
      )}
      {ratings && (
        <Text style={styles.ratings}>
          <Ionicons name="star" size={16} color="#ff8c00ff" /> {ratings}</Text>
      )} 
      {(<Ionicons name="heart-outline" size={25} color="#232323ff" 
      style={{ right: -135, top: -20 }} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffffffff',
    borderRadius: 14,
    //overflow: 'hidden',
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
     resizeMode: "contain",
    height: 115,
    width: 125,
    left: 25,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
    color: '#3C2F2F',
    justifyContent: 'flex-start'
  },
  subtitle: {
    fontSize: 14,
    //marginTop: 10,
    marginHorizontal: 10,
    color: '#3C2F2F',
    justifyContent: 'flex-start'
  },
  ratings:{
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
    marginHorizontal: 10,
    color: '#3C2F2F',
    justifyContent: 'flex-start'
  }
});

export default Card;