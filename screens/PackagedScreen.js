import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Bars3Icon, HeartIcon } from 'react-native-heroicons/mini';

const PackedScreen = () => {

  const [jobs,setJobs] = useState([]);

    let headers = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    
    }
    
      async function fetchData(){
        console.log("Fetching")
        axios
        .get("http://192.168.0.104:5500/Packed",headers)
    
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



  //////////////
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

  return (
    <View>

<ScrollView>
    <View className="">
      <Image source = {{uri: "https://media.istockphoto.com/id/478823059/photo/salty-snacks.jpg?s=612x612&w=0&k=20&c=q1gG89WsYECladAPVohZju8EjBXysdhFvjB4h_C-yN4="}} className="w-full  h-96 rounded-b-full"/>
    </View>

   <View className="pt-3">
    <Text className="font-bold text-center text-3xl">Packed Foods</Text>
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
              >
        <View className="h-45 w-45 pt-10 flex-row">
              <Image source ={{uri: `${data.Ilink}`}}className = "h-40 w-40 left-4 rounded-3xl" />
              <View className="pl-8 pt-4">
        <Text className="text-xl font-bold ">{data.Fname}</Text>
        <View className="flex-row gap-x-2 items-center">
            <Image 
            className="h-6 w-6"
            source={{uri:"https://cdn-icons-png.flaticon.com/512/3334/3334338.png"}}/>
            <Text className="text-lg font-semibold">{data.price} ₹</Text>
        </View>
        <Text className="text-lg  text-gray-700">Quantity: {data.Quantity} {data.unit}</Text>
        <Text className="text-lg  text-gray-700">📍 Bandra West</Text>

    </View>
    <View className="top-1 pl-16">
            <Bars3Icon size={30} color={"#1c3028"}/>
            </View>
            </View>
            
        </TouchableOpacity>
              </>)

              })
              }


    

   

    <View className="top-8 pb-10">
      <Text className="font-bold text-gray-500 text-5xl left-6">
        Saving Humanity
      </Text>
      <Text className="font-bold text-gray-500 text-5xl left-6">
        from Hunger🍴
      </Text>
    </View>

    </ScrollView>
    </View>
  )
}

export default PackedScreen