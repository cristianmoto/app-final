import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { theme } from "../theme/index";
import auth from "@react-native-firebase/auth";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User signed up!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        } else if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        } else {
          console.error(error);
        }
      });
  };

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/fondo.jpg")}
        className="h-full w-full absolute"
      />

      <SafeAreaView className="flex flex-1 justify-center items-center">
        <View style={{ width: "80%" }} className="mb-10">
          <Text className="text-3xl font-bold text-white mb-6 text-center">
            Signup
          </Text>

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
            onPress={handleSignup}
            style={{ backgroundColor: theme.bgWhite(0.3) }}
            className="rounded-full p-3 m-1"
          >
            <Text className="text-white text-center">Signup</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignupScreen;
