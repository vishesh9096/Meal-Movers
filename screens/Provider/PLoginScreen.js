import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneInput from "react-native-phone-number-input";
import { ArrowLeftIcon } from 'react-native-heroicons/mini';


const PLoginScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
      
  })
  )
  
  return (
    <SafeAreaView className="bg-white h-full ">
      <View className="pl-8 pt-4">
        <TouchableOpacity onPress={()=>{navigation.navigate("Initial")}}>
      <ArrowLeftIcon color={"#253d59"} size={35}/>
      </TouchableOpacity>
      </View>
        <View className="flex pt-36 items-center gap-y-8">
          <Text className="text-3xl font-bold">Login</Text>

          <View className="pt-5">

                <View className="  ">
                <PhoneInput
                defaultCode="IN" 
                layout="first" autoFocus containerStyle={{ backgroundColor: 'white',borderBottomWidth:2,borderColor:"#d3d3d3",borderRadius:1,height:40,width:320 }} inputStyle={{borderWidth:0.5, backgroundColor: 'white' }} textContainerStyle={{borderWidth:0.1,backgroundColor:"white" ,paddingBottom:0,paddingTop:0 }}
                />
                </View>
                </View>
                <View className="">

                <View className="pt-1">
                <TextInput placeholder='Enter password' secureTextEntry={true}
                className="bg-white text-xl pl-2 border-b-2 border-[#d3d3d3]  w-80 p-1 h-10 rounded-sm"  />
                </View>
                </View>
        </View>
        <TouchableOpacity>
        <Text className="pt-2 text-gray-500 text-right pr-14">Forgot Password?</Text>
        </TouchableOpacity>

        <View className="pt-20 flex items-center">
          <TouchableOpacity onPress={()=>{navigation.navigate("PHome")}} className="bg-[#253d59] h-14 w-80 rounded-2xl">
              <Text className="font-bold text-center text-white text-xl pt-3">LOGIN</Text>
          </TouchableOpacity>
          <View className="flex-row gap-x-2">
          <Text className="pt-2 text-gray-500 text-center ">Dont have an account?</Text>
          <TouchableOpacity>
          <Text className="pt-2  text-center text-[#253d59] underline">Signup</Text>
          </TouchableOpacity>
          </View>
        </View>
        
       
        <View className="flex items-center pt-28">
        <Text className="pt-6 text-xs">By Continuing you agree to our </Text>
        <Text className="pt-1 text-xs">Terms of Service || Privacy Policy || Content Policy</Text>

        </View>
        
    </SafeAreaView>
  )
}

export default PLoginScreen