import { View, Text, Button,Image, Touchable, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { CakeIcon, SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";
import Svg from 'react-native-svg';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import * as Google from "expo-auth-session/providers/google"


const InitialScreen = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '220970022854-7olfh9re21er80cmaiq3ru0biu2ecl04.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });



  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
    }
  }, [response]);
  const navigation = useNavigation();
    
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <ScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        
        <Image source={require('../assets/initial.jpg')} className="h-96 rounded-b-full w-full"/>
        <Text className="text-center text-4xl pt-8 font-bold px-5">India's #1 Surplus Food  Management App</Text>

        
        <View className="items-center pt-3">
        
        <TouchableOpacity 
        onPress={()=>{navigation.navigate("Home")}}
        className="pt-6">
          <View className="flex-row items-center justify-center gap-x-8 pt-4 pb-5">
          <TouchableOpacity 
          onPress={()=>{navigation.navigate("PLogin")}}>
            <View className="border bg-gray-50 h-36 w-36 rounded-2xl shadow-2xl pt-6  items-center">
            <Image source={require('../assets/supplies.png')} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Provider</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{navigation.navigate("CDashboard")}}
            >
            <View className="border  h-36 bg-gray-50 w-36 rounded-2xl shadow-2xl shadow-black pt-6  items-center">
            <Image source={require('../assets/consumer.png')} className="h-16 rounded  w-16"/>
                <Text className="text-xl font-medium pt-2">Consumer</Text>
            </View>
            </TouchableOpacity>
          </View>
          <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />

          <TouchableOpacity 
          onPress={()=>{navigation.navigate("Admin")}}
          className=" pt-4">
          <Text className="text-xl text-center text-gray-500 font-bold">Admin Login</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <Text className="pt-28 text-xs">By Continuing you agree to our </Text>

        <Text className="pt-1 text-xs">Terms of Service || Privacy Policy || Content Policy</Text>

       
        </View> 
        
        
    </ScrollView>
  )
}

export default InitialScreen