
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App';

const Login: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string; general?: string } = {};
    if (!email) newErrors.email = 'Email gereklidir';
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Geçersiz email adresi';
    if (!password) newErrors.password = 'Şifre gereklidir';
    if (password.length < 6) newErrors.password = 'Şifre en az 6 karakter olmalıdır';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      if (email === 'admin@example.com' && password === '123456') {
        navigation.navigate('Generator'); 
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          general: 'Geçersiz email veya şifre'
        }));
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.formGroup}>
          <View style={styles.inputContainer}>
            <Icon name="email" size={20} color="#007bff" style={styles.icon} />
            <TextInput 
              style={[styles.input, errors.email ? styles.inputError : {}]} 
              placeholder="Email" 
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>
        <View style={styles.formGroup}>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#007bff" style={styles.icon} />
            <TextInput 
              style={[styles.input, errors.password ? styles.inputError : {}]} 
              placeholder="Şifre" 
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>
        {errors.general && <Text style={styles.errorText}>{errors.general}</Text>}
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 16,
  },
  formContainer: {
    width: '100%',
    marginBottom: 50,
  },
  formGroup: {
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  button: {
    backgroundColor: '#3182ce', 
    borderRadius: 8, 
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Login;