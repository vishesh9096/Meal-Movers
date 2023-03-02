import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable  from "react-native-animatable"
import { useNavigation } from '@react-navigation/native';


const Ani2Screen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
            
        }),
        setTimeout(() => {
            navigation.navigate("PHome")
        },3000);
       
    },[]);
  return (
    <SafeAreaView className="bg-[#ffffff] flex-1 items-center pt-48 ">
      <Animatable.Image
      source={require("../assets/confirmdocs.gif")}
      animation="slideInDown"
      iterationCount={1}
      className="h-96 w-96 "
      />


    </SafeAreaView>
  );
};

export default Ani2Screen;