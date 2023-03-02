import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
const AdminScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <SafeAreaView>
        <ScrollView>
   <View className="bg-[#253d59] pt-8 rounded-3xl">
      <Image />
    <Text className=" text-center text-white mx-4"></Text>
      <Text className="font-bold mx-4 text-2xl text-white pt-2 text-center pb-2">Administration Panel</Text>
    </View>

    <View className="flex-row pl-2">
      <Text className="font-bold pt-2 text-xl"> Available Stock: </Text>
      </View>

    <ScrollView contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,}}
        horizontal
        showsHorizontalScrollIndicator={true}
        className="gap-x-2 pb-4"
        >
         
         <TouchableOpacity onPress={()=>{navigation.navigate("Cooked")}}>
            <View className="bg-[#d9c9c3] flex-items-center rounded-3xl w-40 h-40">
            <Text className="font-bold text-5xl text-center top-8 text-[#253d59]">🫕</Text>
            <Text className="font-bold text-xl text-center top-10 text-[#253d59]">Cooked Food</Text>
            <Text className="font-bold text-center text-l top-10 text-[#253d59]"> 20 Items</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate("Raw")}}>
            <View className="bg-[#bfc5c8] flex-items-center rounded-3xl w-40 h-40">
            <View>
            <Text className="font-bold text-5xl text-center top-8 text-[#253d59]">🫑🫒</Text>
            <Text className="font-bold text-xl text-center top-10 text-[#253d59]">Raw Food</Text>
            <Text className="font-bold text-center text-l top-10 text-[#253d59]">8 Items</Text>
            </View>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{navigation.navigate("Packed")}}>
            <View className="bg-[#ccc3b3] flex-items-center rounded-3xl w-40 h-40">
            <Text className="font-bold text-5xl text-center top-8 text-[#253d59]">🍞🥚</Text>
            <Text className="font-bold text-xl text-center top-10 text-[#253d59]">Packaged Food</Text>
            <Text className="font-bold text-center text-l top-10 text-[#253d59]"> 10 Items</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{navigation.navigate("Donation")}}>
            <View className="bg-[#d0d1cc] flex-items-center rounded-3xl w-40 h-40">
            <Text className="font-bold text-5xl text-center top-8 text-[#253d59]">🫴</Text>  
            <Text className="font-bold text-xl text-center top-6 pt-4 text-[#253d59]">Donations</Text>
            <Text className="font-bold text-center text-l top-6 text-[#253d59]"> 8 Items</Text>
            </View>
            </TouchableOpacity>
        </ScrollView>

        <View className="flex-row pl-2">
      <Text className="font-bold pt-2 pl-6 text-xl"> Providers: </Text>
      </View>

      <TouchableOpacity>
        <View className="left-6 top-4 ">
            <View className="bg-white border rounded-3xl w-80 h-40">
            <Text className="font-bold left-6 text-xl top-6  text-[#253d59]">Kresha</Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">MealMover Id: usyekbdjgbexdj</Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">ID: </Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">Contributions: 73</Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">Location: Bandra East </Text>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
        <View className="left-6 top-9 pb-9">
            <View className="bg-white border rounded-3xl w-80 h-40">
            <Text className="font-bold left-6 text-xl top-6  text-[#253d59]">Vishesh</Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">MealMover Id: jhxdvhdxbeagdiyszgw</Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">ID: </Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">Contributions: 5 </Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">Location: Santacruz</Text>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
        <View className="left-6 top-4">
            <View className="bg-white border top-1 pb-6 rounded-3xl w-80 h-40">
            <Text className="font-bold left-6 text-xl top-6  text-[#253d59]">Pankhudi</Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">MealMover Id: jhffuweouaeoubou</Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">ID: </Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">Contributions: 12</Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">Location: Vile Parle</Text>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
        <View className="left-6 top-9 pb-9">
            <View className="bg-white border rounded-3xl w-80 h-20 r">
            <Text className="font-bold text-xl text-center top-6  text-[#253d59]">View all+</Text>
            </View>
            </View>
            </TouchableOpacity>

            <View className="flex-row top-8 pl-2 pb-8">
      <Text className="font-bold pt-2 text-xl"> Consumer FeedBack:  </Text>
      </View>

      <View className="flex-row top-8 pl-2 pb-8">
      <Text className="font-bold pt-2 text-xl"> Top Donors: </Text>
      </View>

      <TouchableOpacity>
        <View className="left-6 top-4">
            <View className="bg-yellow-100 top-1 pb-6 rounded-3xl w-80 h-40">
            <Text className="font-bold left-6 text-xl top-6  text-[#253d59]">Anju</Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">MealMover Id: jhffuweouaeoubou</Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">ID: </Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">Donations: 25</Text>
            <Text className="font-bold left-6 text-l top-8 text-[#253d59]">Location: Vile Parle</Text>
            </View>
            </View>
            </TouchableOpacity>

        </ScrollView>
    </SafeAreaView>
  )
}

export default AdminScreen