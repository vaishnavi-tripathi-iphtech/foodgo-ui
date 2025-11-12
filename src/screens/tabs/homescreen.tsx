import { useState } from 'react';
import {  Text, StyleSheet, View, ScrollView, Image, TextInput, TouchableOpacity, Dimensions, Alert, FlatList, ImageSourcePropType, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../../components/card';

const CATEGORIES = [
  { id: '1', name: 'All' },
  { id: '2', name: 'Combos' },
  { id: '3', name: 'Sliders' },
  { id: '4', name: 'Classics' },
];

const { width: screenWidth } =  Dimensions.get('window');
const NUM_COLUMNS = 2;
const GAP = 15;
const ASPECT_RATIO = { width: 4, height: 3 };

const totalGapSize = (NUM_COLUMNS + 1) * GAP;
const availableWidth = screenWidth - totalGapSize;
const cardWidth = availableWidth / NUM_COLUMNS;
const cardHeight = cardWidth * (ASPECT_RATIO.height / ASPECT_RATIO.width);

type CardItem = {
  id: string;
  title: string;
  imageUrl: ImageSourcePropType;
};

const cardData: CardItem[] = [
  {
    id: '1',
    title: "Cheeseburger Wendy's Burger",
    imageUrl: require('../../assets/images/Cheeseburger.png'),
  },
  {
    id: '2',
    title: 'Hamburger Veggie Burger',
    imageUrl: require('../../assets/images/Hamburger Veggie Burger.png'),
  },
  {
    id: '3',
    title: 'Hamburger Chicken Burger',
    imageUrl: require('../../assets/images/Hamburger Chicken Burger.png'),
  },
  {
    id: '4',
    title: 'Hamburger Fried Chicken Burger',
    imageUrl: require('../../assets/images/Fried Chicken Burger.png'),
  },
];


const HomeScreen = () => {
   const [selectedId, setSelectedId] = useState<string>(CATEGORIES[0].id);
   const renderItem = ({ item }: { item: CardItem }) => (
    <TouchableOpacity
      style={styles.cardWrapper}
      onPress={() => Alert.alert(`You pressed ${item.title}`)}>
      <Card title={item.title} imageUrl={item.imageUrl}>
        {/* Example of passing children */}
        <Text style={styles.customChildText}>More info...</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.container}>
      <View style={styles.top}>
              <Text style={styles.topLeft}>Foodgo</Text>
              <Image source={require('../../assets/images/Mask group.png')} style={styles.topRight} />
      </View>
      <Text style={styles.subtext}>Order your favourite food</Text>
      <View style={styles.searchboxcontainer}>
        <View style={styles.searchbox}>
          <Ionicons name="search" size={25} color="black" />
          <TextInput
            placeholder="Search"
            style={styles.searchboxtext}
          />
        </View>
        <View style={styles.filterbuttoncontainer}>
          <TouchableOpacity style={styles.filterbutton}>
            <Ionicons name="options" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal={true} style= {styles.horizontalscroll} showsHorizontalScrollIndicator={false} >
        {CATEGORIES.map(category => {
          const isSelected = category.id === selectedId;
          return (
            <TouchableOpacity
              key={category.id}
              onPress={() => setSelectedId(category.id)}
              style={[styles.hscrollbutton, isSelected && styles.activebutton]}
              activeOpacity={0.7}>
              <Text style={[styles.hscrollbuttonText,isSelected && styles.activetext]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
        <View style= {styles.cardContainer}>
        <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={{
          paddingHorizontal: GAP / 2,
          paddingTop: GAP,
        }}
      />
       </View>
        </ScrollView>
     </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    backgroundColor:"white" 
  },
  top:{
    flexDirection: "row",      
    justifyContent: "space-between",
    alignItems: "center",       
    paddingHorizontal: 20,      
    marginTop: 10,
  },
  subtext:{
    fontSize:18,
    marginTop:6,
    marginLeft:20,
    color:"gray",
  },  
  topLeft:{
    fontFamily:"lobster-regular",
    fontSize:50,
    fontWeight:"400",
    color:"#3C2F2F",
  },
   topRight:{
    height:60,
    width:60, 
    resizeMode: "contain",
  },
  searchboxcontainer:{
    marginTop:30,
     flexDirection:"row", 
    //backgroundColor:'#ffffff',
    marginBottom:25,
    height: 60,
  },
  searchbox:{
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
    marginTop:10
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
  horizontalscroll:{
    marginBottom:25,
    marginTop:20,
    marginLeft:15,
  },
  hscrollbutton:{
    marginLeft:5, 
    marginRight:5, 
    marginBottom:10,
    alignItems:"center", 
    height:45, 
    //width:60, 
    justifyContent:"center",
    color:"black",
    borderRadius:15,
    backgroundColor:"#F6F6F6",
  },
  activebutton:{
    backgroundColor:"#EF2A39",
    shadowColor:"#000000", 
    shadowOffset:{width:0, height:2}, 
    shadowOpacity:0.25, 
    shadowRadius:3.84, 
    elevation:5,
  },
  activetext:{
    color:"white",
    fontWeight:"bold",
  },
  hscrollbuttonText:{
    color:"gray",
    paddingHorizontal:28,
    paddingVertical:10,
    fontWeight:'bold'
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cardWrapper: {
    width: cardWidth,
    height: cardHeight,
    marginHorizontal: GAP / 2, 
    marginBottom: GAP,
  },
  customChildText: {
    fontSize: 12,
    color: 'gray',
    marginHorizontal: 10,
    marginTop: 4,
  },
});

export default HomeScreen;