import { View, Text , Image, ScrollView} from 'react-native'
import React from 'react'

const PostCard = (props) => {
  return (
    <>
    <ScrollView>
    <View className='flex-row gap-5 mt-2 px-5'>
        <Image 
        source={{uri:props.profileimg}}
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
            <Text className='mt-1'>Eat healthy stay healthy</Text>
            <Image 
            source={{uri:"https://i.pinimg.com/474x/5c/2c/24/5c2c242ce0eea68c4240e41971e8022c.jpg"}}
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
    </ScrollView>
    </>
  )
}

export default PostCard