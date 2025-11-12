import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const googleIcon = require('../assets/images/google_icon.png');

interface GoogleButtonProps {
    onPress: () => void;
    title: string;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={googleIcon} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 12,
    paddingVertical: 14,
    width: '100%',
    marginTop: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    color: '#212529',
    fontWeight: '500',
  },
});

export default GoogleButton;