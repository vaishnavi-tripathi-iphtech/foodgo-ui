import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDetail from '../../components/customDetail';
import { Text } from 'react-native-gesture-handler';


const ProfileScreen = () => {
  return (
    
    <View style={styles.container}>
      <View style={styles.bgBurgercontainer} >
      <Image source={require('../../assets/images/burger_small.png')} style={styles.burger1} />
      <Image source={require('../../assets/images/burger_small.png')} style={styles.burger2} />
      </View>
      <View style={styles.subcontainer}>
          <Image source={require('../../assets/images/dp.png')} style={styles.dp} />
        
        <CustomDetail
          label="Name"
          placeholder="Sophia Patel"
          editable={false}
          iconName='user'
        />
        <CustomDetail
          label="Email"
          placeholder="sofia.patel@example.com"
          editable={false}
          iconName='mail'
        />
        <CustomDetail
          label="Delivery Address"
          placeholder="123 Main St Apartment 4A,New York, NY "
          editable={false}
          iconName='map-pin'
        />
        <CustomDetail
          label="Password"
          placeholder="••••••••••"
          editable={false}
          iconName='lock'
          isPassword={true}
        />
        <View style= {styles.line}/>
       
      <View style={styles.optionsContainer}>
        <Text style={styles.optionText}>Payment Details</Text>
        <Ionicons name='chevron-forward-outline' size={20} color= '#838383ff' />
        </View>
        <View style={styles.optionsContainer}>
        <Text style={styles.optionText}>Order History</Text>
        <Ionicons name='chevron-forward-outline' size={20} color= '#838383ff'/>
      </View>
     
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'flex-end',
    backgroundColor: '#EF2A39'
},
subcontainer: { 
    //flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: '80%',
    borderRadius: 30,
    padding: 20,
  },
  dp: {
    width: 170,
    height: 170,
    borderRadius: 20,
    borderColor: '#ced4da',
    marginTop: -120,
  },
  bgBurgercontainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%' 
  },
  burger1: {
    width: 150,
    height: 150,
    left: -60,
    opacity: 0.2,
  },
  burger2: {
    width: 150,
    height: 150,
    right: -60,
    opacity: 0.2,
  },
  line: { 
    backgroundColor: '#a2a2a2ff', 
    width: '85%', height: 0.8, 
    marginVertical: 25
  },
  optionsContainer: {
    width: '85%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  optionText: {
    fontSize: 16,
    color: '#838383ff',
    fontWeight: 'bold',
  },


});

export default ProfileScreen;