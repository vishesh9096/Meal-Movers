import { View,ScrollView, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect,useState,useEffect} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import PostCard from '../Components/PostCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CalendarIcon, HomeIcon, SquaresPlusIcon, UserIcon } from 'react-native-heroicons/mini'
 
const Community = () => {
    const [task,setTask] = useState("");
  const [taskItems,setTaskItems] = useState([])

  const getData = async()=>{
    let value = await AsyncStorage.getItem('tasks')
    if(value){
      setTaskItems(JSON.parse(value))
    }
  }
  useEffect(()=>{
    getData()
  },[])

  const completeTask = (index)=>{
    let taskItemsCopy = [...taskItems]
    taskItemsCopy.splice(index,1)
    setTaskItems(taskItemsCopy)
    saveTask()
  }

  const saveTask = async()=>{
    try{
      await AsyncStorage.setItem('tasks',JSON.stringify(taskItems))
    }catch(error){
      console.log(error)
    }
  }

  const handleAddTask= async()=>{
    if(task!=""){
      //Keyboard.dismiss()
      setTaskItems([task,...taskItems])
      console.log(taskItems)
      saveTask()
      setTask("")
    }
  }
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
    })
    },[])
  return (
    <SafeAreaView className="h-full">
            <View className='pt-2 pb-5 justify-center items-center'>
            <View className="flex-row items-center">
        <Text className="pt-1 text-center font-bold text-gray-500 text-2xl pr-3 ">MealMovers</Text>
        </View>
            </View>
        <ScrollView className='mb-5 pl-1'>
            
            <View className='flex-row items-center gap-7 pb-5 px-5'>
                <Image 
                source={{uri:'https://cdn-icons-png.flaticon.com/512/3006/3006876.png'}}
                className="h-12 w-12 bg-gray-300 p-4 rounded-full"
                />
                <TextInput placeholder="What's on your mind today" className='pl-2 border-solid border-1 w-48 h-3 border-black-100 rounded-xl mb-10 justify-center' onChangeText={text=>{setTask(text)}} value={task}></TextInput>
                <View className="pl-3">
                <TouchableOpacity className='bg-blue-300 rounded-xl  w-16 h-8 items-center' onPress={()=>handleAddTask()}>
                    <Text className='pt-2'>Post</Text>
                </TouchableOpacity>
                </View>
            </View>
                <View className='w-full bg-gray-300 h-0.5'></View>


                {taskItems.map((item,index)=>{
              return (
                <View key={index} >
                  <View className='flex-row gap-5 mt-2 px-5'>
        <Image 
        source={{uri:'https://cdn-icons-png.flaticon.com/512/3006/3006876.png'}}
        className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className=''>

            <View className='flex-row justify-between'>
              <View className='flex-row gap-1'>

                <Text className='font-bold'>Vishesh Gatha</Text>
                <Text className='text-gray-400'>@vishesh28</Text>
                <Text className='text-gray-400'>1h</Text>
              </View>
                <View>
                <Text>...</Text>
                </View>
            </View>
            <Text className='mt-1'>{item}</Text>
            
            
            <View className='flex-row gap-x-20 px-5 pt-4'>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1947/1947247.png'}} className='h-7 w-7'/>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/2951/2951188.png'}}
              className='h-8 w-8'/>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1077/1077035.png'}}
              className='h-6 w-6 mt-1'/>
            </View>
        </View>
    </View>
    <View className='w-full bg-gray-300 h-0.5 mt-5'></View>
            
                </View>
              )
            })}

            
<View className='flex-row gap-5 mt-2 px-5'>
        <Image 
       source={{ uri:'https://cdn-icons-png.flaticon.com/512/236/236832.png'}}
        className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className=''>

            <View className='flex-row justify-between'>
              <View className='flex-row gap-1'>

                <Text className='font-bold'>Kresha Mehta</Text>
                <Text className='text-gray-400'>@kreshanatomy</Text>
                <Text className='text-gray-400'>3h</Text>
              </View>
                <View>
                <Text>...</Text>
                </View>
            </View>
            <Text className='mt-1'>Eat healthy stay healthy</Text>
            <Image 
            source={{uri:"https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1556&q=80"}}
            className="h-72 w-72 mt-5 bg-gray-300 p-4 rounded-xl"
            />
            
            <View className='flex-row gap-x-20 px-5 pt-4'>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1947/1947247.png'}} className='h-7 w-7'/>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/2951/2951188.png'}}
              className='h-8 w-8'/>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1077/1077035.png'}}
              className='h-6 w-6 mt-1'/>
            </View>
        </View>
    </View>
    <View className='w-full bg-gray-300 h-0.5 mt-5'></View>
            <View className='h-24'></View>
        </ScrollView>
       
      
    </SafeAreaView>
  )
}

export default Community