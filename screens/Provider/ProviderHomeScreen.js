import { View, Text, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CakeIcon, CalendarIcon, CheckBadgeIcon, CheckIcon, ClipboardDocumentIcon, ClipboardDocumentListIcon, FireIcon, FlagIcon, HomeIcon, PlayIcon, PlusIcon, TicketIcon, UserIcon } from 'react-native-heroicons/mini';
import { TouchableOpacity } from 'react-native';

const ProviderHomeScreen = () => {

  
//////////////////////////









  const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
      
  })
  )
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="mx-4">
          <View className="flex-row items-center pb-1 justify-between">
          <Text className="text-xl font-semibold ">Hey, User 👋</Text>
          <View className="flex-row items-center pr-2">
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/236/236832.png'}} className="w-12 h-12 rounded-full"/>
          </View>
          </View>
        </View>
        <ScrollView>
        <Text className="text-2xl mx-4 font-semibold pt-2 text-gray-500 tracking-widest">Reducing waste</Text>
          <Text className="text-2xl mx-4 font-semibold text-gray-500 tracking-widest ">combating hunger together!</Text>

      <View className="pt-12 mx-4 ">
        <Text className="text-2xl pl-2 font-bold">Your Progress</Text>

        <View className="pt-3 flex items-center">
<View className="rounded-xl shadow-lg shadow-black  bg-[#c8d7d7] h-52 w-96 ">
  <View>


    <Text className="font-bold text-center pt-2 text-xl "> Meals Donated</Text>
    <View className='flex-row '>
        <View className=' pt-2 pl-8 h-36 w-36'>
            <View className=" rounded-full h-36 border-8 border-[#253d59] items-center   w-36">
              <Text className='text-3xl font-bold pt-10 '>10</Text>
              <Text className="font-semibold ">Donated</Text>
            </View>
        </View>
        <View className=" absolute gap-y-2 right-12 pt-4 h-36 w-28  ">
          <View className="flex-row items-center gap-x-2">
            <FlagIcon color={"#253d59" }/>
            <View>
            <Text className="text-sm ">Base Goal</Text>
            <Text className="text-md  font-bold">100</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-x-2">
            <CheckIcon color={"#253d59" }/>
            <View>
            <Text className="text-sm ">Completed</Text>
            <Text className="text-md  font-bold">10</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-x-2">
            <FireIcon color={"#253d59" }/>
            <View>
            <Text className="text-sm  ">Points Earned</Text>
            <Text className="text-md  font-bold">50</Text>
            </View>
          </View>
        </View>
    </View>
</View>
</View>
</View>
      </View>

      <View className="px-4 gap-y-2 ">
      <Text className=" text-2xl font-bold pt-4"> Leader Board</Text>

        <View className="bg-[#e9e9e7] flex-row space-x-4 items-center px-2  rounded-xl  w-full h-20">
          <View>
          <Image
          source={{uri:"https://cdn-icons-png.flaticon.com/512/3940/3940403.png"}}
          className="h-16 w-16 rounded-full"
          /></View>
          <View >
            <Text className="text-2xl font-semibold">Vishesh Gatha</Text>
            <Text>Meals donated: 200</Text>
          </View>
          <View className="flex-row pl-14 items-center">
            <Text className="text-2xl font-bold">1K</Text>
            <CheckBadgeIcon color={"#253d59"}/>
          </View>
        </View>


        <View className="bg-[#e9e9e7] flex-row space-x-4 items-center px-2  rounded-xl  w-full h-20">
          <View>
          <Image
          source={{uri:"https://cdn-icons-png.flaticon.com/512/219/219969.png"}}
          className="h-16 w-16 rounded-full"
          /></View>
          <View >
            <Text className="text-2xl font-semibold">Kresha Mehta</Text>
            <Text>Meals donated: 100</Text>
          </View>
          <View className="flex-row pl-12 items-center">
            <Text className="text-2xl font-bold">500</Text>
            <CheckBadgeIcon color={"#253d59"}/>
          </View>
        </View>

        <View className="bg-[#e9e9e7] flex-row space-x-4 items-center px-2  rounded-xl  w-full h-20">
          <View>
          <Image
          source={{uri:"https://cdn-icons-png.flaticon.com/512/236/236832.png"}}
          className="h-16 w-16 rounded-full"
          /></View>
          <View >
            <Text className="text-2xl font-semibold">You</Text>
            <Text>Meals donated: 10</Text>
          </View>
          <View className="flex-row pl-24 items-center">
            <Text className="text-2xl font-bold">50</Text>
            <CheckBadgeIcon color={"#253d59"}/>
          </View>
        </View>

        



        </View>

      </ScrollView>


      <View className="absolute bottom-0  space-x-12  bg-white w-full pt-2 pl-12  flex-row  h-20">
    <TouchableOpacity className="flex items-center" >
      <HomeIcon size={36} color={"#0A2647"}/>
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex items-center"onPress={()=>{navigation.navigate("AllItems")}} >
      <ClipboardDocumentListIcon size={36} color={"#0A2647"}/>
      <Text>View Items</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{navigation.navigate("New")}} className="flex items-center" >
      <PlusIcon size={36} color={"#0A2647"}/>
      <Text>New</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}} className="flex items-center">
      <UserIcon size={36} color={"#0A2647"}/>
      <Text>Profile</Text>
    </TouchableOpacity>
    
</View>


    </SafeAreaView>
  )
}

export default ProviderHomeScreen