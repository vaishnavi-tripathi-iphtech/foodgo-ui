import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface CustomInputProps extends TextInputProps {
  label: string;
  iconName: string;
  isPassword?: boolean;
  editable: false;
}

const CustomDetail: React.FC<CustomInputProps> = ({ 
  label, iconName, isPassword, editable, ...props }
) => {
  const isSecure = isPassword ? true : false;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        
        <Feather 
        name={iconName} 
        size={20} 
        color="#a7a7a7ff" 
        style={styles.icon} 
        />

        <TextInput
          style={styles.input}
          placeholderTextColor="#1c1c1cff"
          secureTextEntry={isSecure}
          editable={editable}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '100%',
  },
  label: {
    marginBottom: 8,
    paddingHorizontal: 5,
    fontSize: 14,
    backgroundColor: '#ffffffff',
    color: '#838383ff', 
    left: 25,
    top: 17,
    zIndex: 1,
    position: 'relative',
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 15, 
    paddingHorizontal: 10, 
  },
  icon: {
    marginRight: 8,
    marginLeft: 4,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 17,
    color: '#212529', 
    fontWeight: 'bold',
  },
});

export default CustomDetail;