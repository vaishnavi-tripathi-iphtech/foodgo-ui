import React, { useState } from 'react';
import {  Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types'; 
import { StackActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/custominput';
import GoogleButton from '../components/google';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLogin = () => {
    console.log('Form Data:', form);
    navigation.dispatch(
      StackActions.replace('MainApp')
    );
  };

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign-In (simulation)!');
  };

  return ( 
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      
      <CustomInput
        label="Username"
        iconName="user" 
        value={form.username}
        onChangeText={(text) => handleInputChange('username', text)}
        placeholder="Enter your username"
      />
      
      <CustomInput
        label="Password"
        iconName='lock'
        isPassword={true} 
        value={form.password}
        onChangeText={(text) => handleInputChange('password', text)}
        placeholder="Enter your password"
      />
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>OR</Text>
      
      <GoogleButton title="Sign in with Google" onPress={handleGoogleSignIn} />
      
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.switchText}>
          Don't have an account? <Text style={styles.linkText}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// All styles in the parent component remain the same, but the 'input' style is now unused.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: 'Lobster-Regular',
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 60,
    color: '#f44b58',
    textAlign: 'center',
    marginBottom: 20,
  },
  input:{
    // borderColor: '#ced4da',
    // borderWidth: 1,
    // borderRadius: 15,
    // paddingHorizontal: 10,
    // paddingVertical: 15,
  },
  orText: {
      textAlign: 'center',
      marginVertical: 20,
      color: '#6c757d',
  },
  switchText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#6c757d',
  },
  linkText: {
    color: '#EF2A39', 
    fontWeight: 'bold',
    fontFamily: 'Lobster-Regular',
  },
  loginButton: {
    backgroundColor: '#EF2A39',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '500',
    fontFamily: 'Lobster-Regular',
  },  
});

export default LoginScreen;