import { View, Text, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable  from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'; 



const AniScreen1 = () => {
    const navigation = useNavigation();
    

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Initial");
        },3000);
       
    },[]);
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <SafeAreaView className="bg-white flex-1 pt-32 justify-centre items-center ">
      <Animatable.Image
      source={require("../assets/124.gif")}
      animation="slideInUp"
      iterationCount={1}
      className="h-96 w-96 p-2 rounded-full"
      />

      <Animatable.Text
      animation="slideInUp"
      iterationCount={2}
      className="text-3xl my-10 text-[#253d59] font-bold text-center"
      >

            M E A L   
                  M O V E R S

      </Animatable.Text>
      <Progress.Bar  width={200} animationType='decay' color="#253d59" indeterminate={true} />
      
      <Text className="pt-44 text-xs text-white">By Continuing you agree to our </Text>

        <Text className="pt-1 text-xs text-white">Terms of Service || Privacy Policy || Content Policy</Text>


    </SafeAreaView>
  );
};

export default AniScreen1;