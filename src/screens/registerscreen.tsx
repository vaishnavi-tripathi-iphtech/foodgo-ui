import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert, ScrollView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { StackActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomInput from '../components/custominput';
import GoogleButton from '../components/google';

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  // REFINEMENT: Use a single state object for the entire form
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleRegister = () => {
    if (form.password !== form.confirmPassword) {
      Alert.alert("Passwords don't match!");
      return;
    }
    console.log('Registering with data:', form);
    navigation.dispatch(
      StackActions.replace('MainApp')
    );
  };

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign-Up (simulation)!');
  };

  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <CustomInput
        label="Full Name"
        iconName="user"
        value={form.name}
        onChangeText={(text) => handleInputChange('name', text)}
        placeholder="Enter your full name"
      />

      <CustomInput
        label="Email Address"
        iconName="mail"
        value={form.email}
        onChangeText={(text) => handleInputChange('email', text)}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <CustomInput
        label="Username"
        iconName="at-sign"
        value={form.username}
        onChangeText={(text) => handleInputChange('username', text)}
        placeholder="Choose a username"
        autoCapitalize="none"
      />

      <CustomInput
        label="Password"
        iconName="lock"
        isPassword={true}
        value={form.password}
        onChangeText={(text) => handleInputChange('password', text)}
        placeholder="Create a password"
      />

      <CustomInput
        label="Confirm Password"
        iconName="lock"
        isPassword={true} 
        value={form.confirmPassword}
        onChangeText={(text) => handleInputChange('confirmPassword', text)}
        placeholder="Confirm your password"
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>OR</Text>
      
      <GoogleButton title="Sign up with Google" onPress={handleGoogleSignIn} />
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.switchText}>
          Already have an account? <Text style={styles.linkText}>Log In</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: Platform.select({
      ios: 'Lobster-Regular', 
      android: 'lobster_regular', 
    }),
    fontWeight: '400',
    fontSize: 40,
    lineHeight: 60,
    color: '#f44b58',
    textAlign: 'center',
    marginBottom: 20,
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
    marginBottom: 20,
  },
  linkText: {
    color: '#EF2A39',
    fontWeight: 'bold',
    fontFamily: Platform.select({
      ios: 'Lobster-Regular', 
      android: 'lobster_regular', 
    }),
  },
  registerButton: {
    backgroundColor: '#EF2A39',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '500',
    fontFamily: Platform.select({
      ios: 'Lobster-Regular', 
      android: 'lobster_regular', 
    }),
  },
});

export default RegisterScreen;