import React, { useState } from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

import { HomeStackParamList } from '../../navigation/homeStackNavigation';

type ProductDetailsRouteProp = RouteProp<HomeStackParamList, 'ProductDetails'>;
type ProductDetailsNavigationProp = StackNavigationProp<HomeStackParamList, 'ProductDetails'>;

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailsRouteProp>();
  const { product } = route.params;
  const navigation = useNavigation<ProductDetailsNavigationProp>();

  const [value, setValue] = useState(50); 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={25} color="#3C2F2F" />
        </TouchableOpacity>
      </View>

      {product?.imageUrl && (
        <Image source={product.imageUrl} style={styles.image} resizeMode="contain" />
      )}
      
      <Text style={styles.title}>{product?.title} {product?.subtitle}</Text>

      <Text style={styles.ratings}>
        <Ionicons name="star" size={13} color="#ff8c00ff" /> {product?.ratings} - 40 mins
      </Text>
    
      <Text style={styles.spicy}>Spicy</Text>
      <Slider
         value={value}
         onValueChange={setValue}
         minimumValue={0}
         maximumValue={100}
         minimumTrackTintColor="#EF2A39"  
         maximumTrackTintColor="#E0E0E0"  
         thumbTintColor='#EF2A39'  
         style= {styles.slider}
      />
      <Text style={styles.portion}>Portion</Text>
      <View style={styles.minusButton}> 
        <Ionicons name='remove-outline' size={20} color='white'/>
      </View>
      <Text style={styles.quantity}> 2 </Text>
      <View style={styles.plusButton}> 
        <Ionicons name='add-outline' size={20} color='white'/>
      </View>
      <View style={{flexDirection: 'row', gap: 72}}>
       <View style={styles.costButton}> 
      <Text style={styles.cost}>$8.24</Text>
      </View>
      <View style={styles.ordernowButton}> 
      <Text style={styles.ordernowtext}>ORDER NOW</Text>
      </View>
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: 'white',
    marginBottom: 12,
  },
  backButton: {
    padding: 6,
    marginRight: 8,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  ratings: {
    fontSize: 14,
    color: '#666',
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  spicy: {
    fontSize: 14,
    color: '#181818ff',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    marginTop: 20,
    fontWeight: '600',
  },
  slider: {
    width: '30%',
    height: 20,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    marginTop: 10,
  },
  portion: {
    fontSize: 14,
    color: '#181818ff',
    top: -65,
    left: 70,
    paddingLeft: 20,
    marginTop: 20,
    fontWeight: '600',
  },
minusButton: { 
  top: -58,
  left: 70,
  backgroundColor:"#EF2A39", 
  height: 30, 
  width: 30, 
  borderRadius:6, 
  alignItems: 'center', 
  justifyContent: 'center' 
},
quantity: {
  top: -80,
  left: 100,
   borderRadius:6, 
   alignItems: 'center', 
   justifyContent: 'center' ,
   fontSize: 14,
    color: '#181818ff',
    fontWeight: '600'
},
plusButton: {
  top: -105,
  left: 135,
  backgroundColor:"#EF2A39", 
  height: 30, 
  width: 30, 
  borderRadius:6, 
  alignItems: 'center', 
  justifyContent: 'center' 
},
costButton:{
  backgroundColor: '#EF2A39', 
  height: 60, 
  width: 90, 
  alignItems: 'center', 
   justifyContent: 'center', 
   borderRadius: 15,  
},
cost: {
  fontSize:17,
  color:'white',
  fontWeight:"bold"
},
ordernowButton:{
  backgroundColor: '#292929ff', 
  height: 60, 
  width: 200, 
  alignItems: 'center', 
   justifyContent: 'center', 
   borderRadius: 15,  
},
ordernowtext:{
  fontSize:17,
  color:'white',
  fontWeight:"bold"
}
});

export default ProductDetailScreen;
