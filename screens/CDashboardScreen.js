import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowDownIcon, Bars3Icon, BellAlertIcon, CalendarIcon, ChevronDownIcon, CreditCardIcon, HeartIcon, HomeIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, MapPinIcon, SquaresPlusIcon, StarIcon, UserCircleIcon, UserIcon } from "react-native-heroicons/mini";
import axios from "axios";
import user from "../backend/model/user";

const CDashboardScreen = () => {

    const [jobs,setJobs] = useState([]);
    const [temp,setTemp]= useState();

    let headers = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    
    }
    
      async function fetchData(){
        console.log("Fetching")
        axios
        .get("http://192.168.0.104:5500/Offers",headers)
    
        //.get("http://192.168.0.155:5500/alljobs",headers)
    
        .then(function (response) {
            setJobs(response.data);
            console.log(jobs.Tour[0].Fname);
        })
        .catch(error => console.log(error));
    } 
    
    useEffect(() => {
        fetchData()
    }, [])


    /////////////
  const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    
  return (
    <SafeAreaView className="">
    
    {/* {Header} */}
    <View className="px-2 flex-row items-center justify-between">
        <View>
        <View className="flex-row items-center gap-x-1">
            <MapPinIcon size={30} color={"#0A2647"}/>
            <Text className="font-bold text-2xl">Bandra </Text>
            <ChevronDownIcon size={30} color={"#0A2647"}/>
        </View>
        <Text className="pl-1 text-gray-700 ">Thadomal Shahani Engineering College,Linking Ro..</Text>
        </View>
        <View>
            <UserCircleIcon size={50} color={"#0A2647"}/>
        </View>
    </View>
    <View className="pt-2 px-3">
        <TextInput placeholderTextColor = "black"
        placeholder='Search for Provider, Dish or more' 
        className="w-full h-16 rounded-2xl  text-xl bg-white pl-3  shadow-lg shadow-black"
        />
        <View className="absolute right-6 top-6">
        <MagnifyingGlassIcon size={35} color={"#0A2647"}/>
        </View>
    </View>

    <ScrollView className="bg-white-200">

    <ScrollView contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,}}
        horizontal
        showsHorizontalScrollIndicator={true}
        className="gap-x-2"
        >
         
            <View className="bg-[#d9c9c3] flex-items-center rounded-2xl w-60 h-20">
            <Text className="font-bold text-xl text-center pt-4 text-[#253d59]">Today's special</Text>
            <Text className="font-bold text-center text-l text-[#253d59]"> 15% Discount</Text>
            </View>

            <View className="bg-[#bfc5c8] flex-items-center rounded-2xl w-60 h-20">
            <Text className="font-bold text-xl text-center pt-4 text-[#253d59]">40% Discount</Text>
            <Text className="font-bold text-center text-l text-[#253d59]">On first 4 orders</Text>
            </View>
            
            <View className="bg-[#ccc3b3] flex-items-center rounded-2xl w-60 h-20">
            <Text className="font-bold text-xl text-center pt-4 text-[#253d59]">Try Donations</Text>
            <Text className="font-bold text-center text-l text-[#253d59]"> Free ...</Text>
            </View>
            
            <View className="bg-[#d0d1cc] flex-items-center rounded-2xl w-60 h-20">
            <Text className="font-bold text-xl text-center pt-4 text-[#253d59]">Flat ₹200 off</Text>
            <Text className="font-bold text-center text-l text-[#253d59]"> On Cart with FF000NEW</Text>
            </View>
        </ScrollView>

      <View className="flex-row pl-2">
      <Text className="font-bold pt-2 text-2xl pl-3 pb-3">Search by categories</Text>
      </View>

<View className='flex items-center'>
<View className="flex-row  gap-x-12">
      <TouchableOpacity onPress={() => navigation.navigate('Cooked')}>
      <View className="h-45 w-45 pt-4 border-spacing-2 border-y-cyan-700 ">
          <Image source ={{ uri:"https://www.eatthis.com/wp-content/uploads/sites/4/2020/09/mixed-vegetables.jpg?quality=82&strip=1"}} className="h-40 w-40 rounded-full" />
          <Text className = "text-xl font-bold text-center pt-2 "> Cooked Food</Text>
    </View>
    </TouchableOpacity> 

    
    <TouchableOpacity onPress={() => navigation.navigate("Raw")}>
    <View className="h-45 w-45 pt-4 ">
          <Image source ={{uri: "https://www.heart.org/-/media/Images/News/2019/April-2019/0429SustainableFoodSystem_SC.jpg"}}className = "h-40 w-40 rounded-full" />
          <Text className = "text-xl font-bold pt-2 text-center  "> Raw Food </Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>

    <View className='flex pb-4 items-center'>
<View className="flex-row  gap-x-12">
      <TouchableOpacity onPress={() => navigation.navigate("Packed")}>
      <View className="h-45 w-45 pt-4 border-spacing-2 border-y-cyan-700 ">
          <Image source ={{ uri:"https://thoughtoverdesign.com/wp-content/uploads/2022/06/twt_range-2.png"}} className="h-40 w-40 rounded-full" />
          <Text className = "text-xl font-bold text-center pt-2 "> Packaged Food </Text>
    </View>
    </TouchableOpacity> 

    
    <TouchableOpacity onPress={() => navigation.navigate("Donation")}>
    <View className="h-45 w-45 pt-4 ">
          <Image source ={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3d5qyPr8H4LRqS3QhxyRNStKkvyHzo5qLyA8TF6n_nZJB_9GFmzoEHPwSftFwNUQqiYc&usqp=CAU"}}className = "h-40 w-40 rounded-full" />
          <Text className = "text-xl font-bold pt-2 text-center  "> Donations </Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
    <View className="h-60 w-full bg-[#1c3028]">
        <Text className="pt-2 pl-4 text-white font-bold text-xl">Popular Providers</Text>
        <ScrollView horizontal={true} className="pt-2 space-x-8 pl-4">
            <TouchableOpacity>
            <View className="bg-white h-32 w-32 flex items-center rounded-xl">
                <View className="pt-3">
                <View className="absolute right-0 top-1"><HeartIcon size={28} color="red"/></View>
                <Image
                className="h-28 w-28 "
                source={{uri:"https://cdn-icons-png.flaticon.com/512/4140/4140061.png"}}/>
                </View>
            </View>
            <Text className="text-white items-start font-bold pt-2  text-lg">Vishesh Gatha</Text>
            <View className="flex-row items-end">
            <StarIcon size={20} color={"white"}/>
            <Text className="text-white items-start font-bold"> 4.3 . 36mins</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View className="bg-white h-32 w-32 flex items-center rounded-xl">
                <View className="pt-3">
                <View className="absolute right-0 top-1"><HeartIcon size={28} color="red"/></View>
                <Image
                className="h-28 w-28 "
                source={{uri:"https://cdn-icons-png.flaticon.com/512/219/219969.png"}}/>
                </View>
            </View>
            <Text className="text-white items-start font-bold pt-2  text-lg">Kresha Mehta</Text>
            <View className="flex-row items-end">
            <StarIcon size={20} color={"white"}/>
            <Text className="text-white items-start font-bold"> 4.5 . 26mins</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View className="bg-white h-32 w-32 flex items-center rounded-xl">
                <View className="pt-3">
                <View className="absolute right-0 top-1"><HeartIcon size={28} color="red"/></View>
                <Image
                className="h-28 w-28 "
                source={{uri:"https://cdn-icons-png.flaticon.com/512/4140/4140077.png"}}/>
                </View>
            </View>
            <Text className="text-white items-start font-bold pt-2  text-lg">Pankhudi Jaiswal</Text>
            <View className="flex-row items-end">
            <StarIcon size={20} color={"white"}/>
            <Text className="text-white items-start font-bold"> 4.1 . 45mins</Text>
            </View>
            </TouchableOpacity>

        </ScrollView>

    </View>

    <View className="flex-row pl-2 pt-4">
    <Text className="font-bold pt-2 text-2xl pl-3 pb-3">Offers To Grab</Text>
         </View>




    


                {

            jobs.Tour && jobs.Tour.map(data=>{
            return(
                <>
            <TouchableOpacity
            onPress={(async)=>{   navigation.navigate("Product",{paramKey:data._id,name:data.Fname,
            Pname:data.Pname,
            Expiry:data.Expiry,
            Quantity:data.Quantity,
            Age:data.Age,
            Category:data.Category,
            Ilink:data.Ilink,
            myDate:data.myDate,
            unit:data.unit,
            price:data.price


            })}}
            className="gap-y-2 px-4 felx pt-4 items-center">

<View className="w-full flex-row items-center space-x-4 h-52 ">
    <View className="h-48  w-40 rounded-2xl pt-2 pl-2">
        <Image 
        className="w-40 h-48 rounded-2xl"
        source={{uri:`${data.Ilink}`}}/>
    </View>
    <View className="pl-2">
        <Text className="text-xl font-bold ">{data.Fname}</Text>
        <View className="flex-row gap-x-2 items-center">
            <Image 
            className="h-6 w-6"
            source={{uri:"https://cdn-icons-png.flaticon.com/512/3334/3334338.png"}}/>
            <Text className="text-lg font-semibold">{data.price} ₹</Text>
        </View>
        <Text className="text-lg  text-gray-700">{data.Pname}</Text>
        <Text className="text-lg  text-gray-700">Bandra West</Text>

    </View>
    <View  className="absolute top-5 right-3">
    <Bars3Icon size={30} color={"gray"}/>
    </View>
    
</View>

 
</TouchableOpacity>
            </>)

            })
            }
            <View className="pt-10 px-5">
            <TouchableOpacity
            onPress={()=>{navigation.navigate("Feedback")}}
            className="w-full h-40 bg-white shadow-lg flex-row items-center shadow-black  rounded-2xl">
                <View className="pl-4 pt-2">
                    <Image 
                    className="h-36 w-36"
                    source={{uri:"https://cdn-icons-png.flaticon.com/512/2016/2016279.png"}}/>
                </View>
                <View className="pl-8">
                    <Text className="text-3xl font-bold">Give Your</Text>
                    <Text className="text-3xl font-bold">Feedback</Text>
                </View>

            </TouchableOpacity>
            </View>


    <View className="h-80"></View>
    </ScrollView>

    <View className="absolute bottom-28 left-0 space-x-12  bg-white w-full pt-2 pl-12  flex-row  h-20">
    
    <TouchableOpacity className="flex items-center" >
      <HomeIcon size={36} color={"#0A2647"}/>
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Notification")}}>
      <BellAlertIcon size={36} color={"#0A2647"}/>
      <Text>Notify</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Commu")}}>
      <SquaresPlusIcon size={36} color={"#0A2647"}/>
      <Text>Community</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}
    className="flex items-center">
      <UserIcon size={36} color={"#0A2647"}/>
      <Text>Profile</Text>
    </TouchableOpacity>
    
</View>


    </SafeAreaView>
  );
};

export default CDashboardScreen;