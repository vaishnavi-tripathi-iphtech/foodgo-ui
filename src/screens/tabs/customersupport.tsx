import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomerSupport = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi, how can I help you?', sender: 'support' },
    { id: '2', text: 'Hello, I ordered two fried chicken burgers. can I know how much time it will get to arrive?', sender: 'user' },
    { id: '3', text: 'Ok, please let me check!', sender: 'support' },
    { id: '4', text: 'Sure...', sender: 'user' },
    { id: '5', text: 'It’ll get 25 minutes to arrive to your address', sender: 'support' },
    { id: '6', text: 'Ok, thanks you for your support', sender: 'user' },
  ]);

  const [input, setInput] = useState('');

  const renderMessage = ({ item }: any) => {
    const isUser = item.sender === 'user';
    return (
      <View
        style={[
          styles.messageContainer,
          isUser ? styles.userMessageContainer : styles.supportMessageContainer,
        ]}
      >
        {!isUser && (
          <View style={styles.avatarPlaceholder}>
          <Ionicons name= 'person-outline' color='#ffffffff' size={25} style={{ }}/> </View>
        )}
        <View
          style={[
            styles.messageBubble,
            isUser ? styles.userBubble : styles.supportBubble,
          ]}
        >
          <Text
            style={[
              styles.messageText,
              isUser ? styles.userText : styles.supportText,
            ]}
          >
            {item.text}
          </Text>
        </View>
        {isUser && (
          <View style={styles.avatarPlaceholder}>
          <Image source={require('../../assets/images/dp.png')} style={styles.avatar} /> </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Ionicons name="menu" size={22} color="#222" />
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatContainer}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type here..."
          placeholderTextColor="#aaa"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  chatContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 6,
  },
  userMessageContainer: {
    justifyContent: 'flex-end',
  },
  supportMessageContainer: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: '70%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginVertical: 10
  },
  userBubble: {
    backgroundColor: '#EF2A39',
  },
  supportBubble: {
    backgroundColor: '#f1f1f1',
  },
  messageText: {
    fontSize: 16,
    fontWeight:'bold',
    lineHeight: 18,
  },
  userText: {
    color: '#fff',
  },
  supportText: {
    color: '#222',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 8,
  },
  avatarPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 8,
    backgroundColor: '#ddd', 
    alignItems: 'center',
    justifyContent:'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
    bottom: 80,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 14,
    color: '#000',
    height: 60
  },
  sendButton: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#f44b58',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

export default CustomerSupport;
