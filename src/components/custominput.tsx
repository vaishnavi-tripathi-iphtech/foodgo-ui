import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface CustomInputProps extends TextInputProps {
  label: string;
  iconName: string;
  isPassword?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({ 
  label, iconName, isPassword, ...props }
) => {
  const [isSecure, setIsSecure] = React.useState(isPassword);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        
        <Feather 
        name={iconName} 
        size={20} 
        color="#9b9fa3ff" 
        style={styles.icon} />

        <TextInput
          style={styles.input}
          placeholderTextColor="#A9A9A9"
          secureTextEntry={isSecure}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
            <Feather
              name={isSecure ? 'eye-off' : 'eye'}
              size={20}
              color="#7d6c6fff"
              style={{ marginRight: 4 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    color: '#6c757d',
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
    fontSize: 16,
    color: '#212529', 
  },
});

export default CustomInput;