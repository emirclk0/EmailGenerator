import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Generator: React.FC = () => {
  const handleGenerateEmail = () => {
    alert("Generated Successfully");
  };

  const handleSend = () => {
    alert("Sent Successfully");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/profile.jpg')} 
          style={styles.profileImage}
        />
        <Text style={styles.headerText}>Email Generator</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>⋮</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.generateButton} onPress={handleGenerateEmail}>
        <Text style={styles.generateButtonText}>Generate Email</Text>
      </TouchableOpacity>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. Solve by breaking the problem into steps. First, identify the odd numbers, add them, and indicate whether the result is odd or even.
        </Text>
      </View>
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send ✉️</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingBottom: 50, 
  },
  header: {
    backgroundColor: '#E3F2FD',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 40, 
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  menuButton: {
    padding: 10,
  },
  menuButtonText: {
    fontSize: 24,
    color: '#007AFF',
  },
  generateButton: {
    backgroundColor: '#3182ce',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  messageContainer: {
    backgroundColor: '#E0F7FA',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '90%',
  },
  messageText: {
    fontSize: 16,
    textAlign: 'center',
  },
  sendButton: {
    backgroundColor: '#3182ce',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Generator;