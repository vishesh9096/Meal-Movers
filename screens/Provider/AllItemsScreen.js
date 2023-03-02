import { View, Text, Touchable, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import moment from 'moment';
import { ArrowLeftIcon, HeartIcon } from 'react-native-heroicons/mini';



  

const AllItemsScreen = () => {
    const [Pname,setPname] = useState("Vishesh");
    const [Fname,setFname] = useState("");
    const [Quantity,setQuantity] = useState("");
    const [Expiry,setExpiry] = useState("");
    const [Category,setCategory] = useState("");
    const [Lat,setLat] = useState("");
    const [Long,setLong] = useState("");
    const [Age,setAge] = useState("");
    const [Time,setTime] = useState("");
    const [Date,setDate] = useState("");
    const [price,setPrice] = useState("");





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
    .get("http://192.168.0.104:5500/findTour",headers)

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


    const handleClick =async()=>{
        
        
        console.log("func called")
        await axios.post('http://192.168.0.104:5500/cTour',{
          Pname:"dsfsd",
          Fname:moment().format('MMMM Do YYYY, h:mm:ss a'),
          Quantity:"4242",
          price:0,
        })
        
      }
    const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
      
  })
  )
  return (
    <SafeAreaView className="h-full  ">
        <View className="flex-row items-end gap-x-24 pl-5">
        <TouchableOpacity
        onPress={()=>{navigation.navigate("PHome")}} >
            <ArrowLeftIcon size={32} color={"black"}/>
        </TouchableOpacity>
        <Text className="text-3xl  font-bold text-center pt-4">All Items</Text>
        </View>
        <ScrollView className="pt-4  px-4">
           
           
           
           
           



                    
                    
           {

            jobs.Tour && jobs.Tour.map(data=>{
            return(
                <>
              <TouchableOpacity className="w-full   flex-row items-center h-32  bg-white rounded-3xl ">

<View className="pl-3" >
    <Image source={{uri:`${data.Ilink}`}}
    className="h-24 w-24 rounded-full"/>
</View>
<View className="pl-3 w-full pr-32">
    <Text className="text-2xl font-semibold">{data.Fname}</Text>
    <Text className="text-lg text-gray-500 ">{data.date}</Text>
    <View className="h-0.5 w-full bg-gray-100"></View>
    <Text className="text-xl pt-2 text">{data.myDate}</Text>
    <View className="absolute right-32">
    <HeartIcon size={28} color={"red"}/>
    </View> 
</View>
</TouchableOpacity>
<View className="h-4"></View>
            </>)
            
            })
            }
                    
          
           

           

          

        </ScrollView>


    </SafeAreaView>
  )
}

export default AllItemsScreen