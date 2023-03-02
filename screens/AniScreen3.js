import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable  from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'; 



const AniScreen3 = () => {
    const navigation = useNavigation();
    

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("CDashboard");
        },3000);
       
    },[]);
  return (
    <SafeAreaView className="bg-yellow-100 flex-1 pt-32 justify-centre items-center ">
      <Animatable.Image
      source={require("../assets/burgir.gif")}
      animation="slideInUp"
      iterationCount={1}
      className="h-96 w-96 p-2 rounded-full"
      />

      <Animatable.Text
      animation="slideInUp"
      iterationCount={1}
      className="text-3xl my-3 text-gray-500 font-bold text-center"
      >
        Save Food,
      </Animatable.Text>

      <Animatable.Text
      animation="slideInUp"
      iterationCount={2}
      className="text-3xl my-1 text-gray-500 font-bold text-center"
      >
       Save Lives🌟..
      </Animatable.Text>
    

      
      <Text className="pt-44 text-xs text-white">By Continuing you agree to our </Text>

        <Text className="pt-1 text-xs text-white">Terms of Service || Privacy Policy || Content Policy</Text>


    </SafeAreaView>
  );
};

export default AniScreen3