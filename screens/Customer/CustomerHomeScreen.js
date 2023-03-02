import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


const handleClick =async()=>{
  console.log("func called")
  await axios.post('http://192.168.0.104:5500/cTour',{
    name:"mehta",
    rating:"9.0",
    price:500
  })
  
}



const HomeScreen = () => {

  const [jobs,setJobs] = useState([]);
  let headers = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

}

  async function fetchData(){
    axios
    .get("http://192.168.0.104:5500/findTour",headers)

    //.get("http://192.168.0.155:5500/alljobs",headers)

    .then(function (response) {
        setJobs(response.data);
        console.log(jobs.Tour[0].name);
    })
    .catch(error => console.log(error));
} 

useEffect(() => {
    fetchData()
}, [])
  return (
    <View>
      <Text className="text-red-600">Home</Text>
      <TouchableOpacity
      onPress={handleClick}
      >
        <Text className="text-3xl" >click</Text>

      </TouchableOpacity>
    </View>
  )

}

export default HomeScreen