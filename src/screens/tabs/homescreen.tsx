import React, { useState } from 'react'; 

import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ImageSourcePropType
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../../components/card';
import { Platform } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../navigation/homeStackNavigation';


const CATEGORIES = [
  { id: '1', name: 'All' },
  { id: '2', name: 'Combos' },
  { id: '3', name: 'Sliders' },
  { id: '4', name: 'Classics' },
];

const { width: screenWidth } = Dimensions.get('window');
const NUM_COLUMNS = 2;
const GAP = 20; 
const ASPECT_RATIO = { width: 3, height: 3.5 };

const totalGapSize = (NUM_COLUMNS + 1) * GAP;
const availableWidth = screenWidth - totalGapSize;
const cardWidth = availableWidth / NUM_COLUMNS;
const cardHeight = cardWidth * (ASPECT_RATIO.height / ASPECT_RATIO.width);

type CardItem = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: ImageSourcePropType;
  ratings: number;
};

const cardData: CardItem[] = [
  { id: '1', title: "Cheeseburger", subtitle: "Wendy's Burger", 
    imageUrl: require('../../assets/images/Cheeseburger.png'), ratings: 4.9},
  { id: '2', title: 'Hamburger', subtitle: "Veggie Burger", 
    imageUrl: require('../../assets/images/Hamburger Veggie Burger.png'), ratings: 4.8 },
  { id: '3', title: 'Hamburger', subtitle: "Chicken Burger", 
    imageUrl: require('../../assets/images/Hamburger Chicken Burger.png'), ratings: 4.6 },
  { id: '4', title: 'Hamburger', subtitle: "Fried Chicken Burger", 
    imageUrl: require('../../assets/images/Fried Chicken Burger.png'), ratings: 4.5 },
];

const HomeHeader = () => {
  const [selectedId, setSelectedId] = useState<string>(CATEGORIES[0].id);

  return (
    <>
      <View style={styles.top}>
        <Text style={styles.topLeft}>Foodgo</Text>
        <Image source={require('../../assets/images/Mask group.png')} style={styles.topRight} />
      </View>
      <Text style={styles.subtext}>Order your favourite food</Text>
      <View style={styles.searchboxcontainer}>
        <View style={styles.searchbox}>
          <Ionicons name="search" size={25} color="black" />
          <TextInput placeholder="Search" style={styles.searchboxtext} />
        </View>
        <View style={styles.filterbuttoncontainer}>
          <TouchableOpacity style={styles.filterbutton}>
            <Ionicons name="options" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal={true} style={styles.horizontalscroll} showsHorizontalScrollIndicator={false}>
        {CATEGORIES.map(category => {
          const isSelected = category.id === selectedId;
          return (
            <TouchableOpacity
              key={category.id}
              onPress={() => setSelectedId(category.id)}
              style={[styles.hscrollbutton, isSelected && styles.activebutton]}
              activeOpacity={0.7}>
              <Text style={[styles.hscrollbuttonText, isSelected && styles.activetext]}>{category.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const renderItem = ({ item }: { item: CardItem }) => (
    <TouchableOpacity
      style={styles.cardWrapper}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <Card imageUrl={item.imageUrl} subtitle={item.subtitle} ratings={item.ratings} title={item.title} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={NUM_COLUMNS}
        ListHeaderComponent={<HomeHeader />}
        contentContainerStyle={{
          paddingHorizontal: GAP / 2,
        }}/>
    </SafeAreaView>
  );
};

// --- Stylesheet (with minor adjustments) ---
const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container fill the screen
    backgroundColor: 'white',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    //marginTop: 10,
  },
  subtext: {
    fontSize: 18,
    marginTop: 6,
    marginLeft: 20,
    color: 'gray',
  },
  topLeft: {
    fontFamily: Platform.select({
      ios: 'Lobster-Regular', 
      android: 'lobster_regular', 
    }),
    fontSize: 50,
    fontWeight: '400',
    color: '#3C2F2F',
  },
  topRight: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  searchboxcontainer: {
    marginTop: 20,
    flexDirection: 'row',
    //paddingHorizontal: 20, 
    alignItems: 'center',
  },
  searchbox: {
    width:"72%",
height: '90%',
flexDirection:"row",
alignItems:"center",
backgroundColor:"#ffffffff",
borderRadius: 20,
shadowColor:"#000000",
shadowOffset:{width:0, height:2},
shadowOpacity:0.25,
shadowRadius:3.84,
elevation:5,
paddingHorizontal:10,
marginHorizontal:20,
marginTop:20,
  },
searchboxtext:{
marginLeft:10,
fontSize:16,
flex:1,
color:'#3C2F2F',
},
filterbuttoncontainer:{
justifyContent:"center",
alignItems:"center",

},
filterbutton:{
backgroundColor:"#EF2A39",
height:56,
width:56,
borderRadius:20,
justifyContent:"center",
alignItems:"center",
shadowColor:"#000000",
shadowOffset:{
width:0, height:2
},
shadowOpacity:0.25,
shadowRadius:3.84,
elevation:5,
marginTop:10
},
  horizontalscroll: {
    marginTop: 40,
    marginBottom: 30,
    paddingLeft: 15,

  },
  hscrollbutton: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#F6F6F6',
  },
  activebutton: {
    backgroundColor: '#EF2A39',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  activetext: {
    color: 'white',
    fontWeight: 'bold',
  },
  hscrollbuttonText: {
    color: 'gray',
    paddingHorizontal: 25,
    paddingVertical: 12,
    fontWeight: 'bold',
  },
  cardWrapper: {
    width: cardWidth,
    height: cardHeight,
    marginHorizontal: GAP / 2,
    marginBottom: GAP,
  },
});

export default HomeScreen;