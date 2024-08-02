import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme/index';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          console.log('No user found with that email.');
        } else if (error.code === 'auth/wrong-password') {
          console.log('Incorrect password.');
        } else {
          console.error(error);
        }
      });
  };

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require('../assets/images/fondo.png')}
        className="h-full w-full absolute"
      />

      <SafeAreaView className="flex flex-1 justify-center items-center">
        <View style={{ width: '80%' }} className="mb-10">
          <Text className="text-3xl font-bold text-white mb-6 text-center">Login</Text>
          
          <View className="mb-4">
            <TextInput
              placeholder="Email"
              placeholderTextColor="lightgray"
              className="pl-6 h-12 text-base text-white bg-transparent border-b-2 border-gray-400 mb-4"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="lightgray"
              className="pl-6 h-12 text-base text-white bg-transparent border-b-2 border-gray-400"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            onPress={handleLogin}
            style={{ backgroundColor: theme.bgWhite(0.3) }}
            className="rounded-full p-3 m-1"
          >
            <Text className="text-white text-center">Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;
