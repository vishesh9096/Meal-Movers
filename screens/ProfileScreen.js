import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
    const navigation = useNavigation();
  return (
<View>
    <View className=" w-90 flex-row pt-6 pb-6 px-6 bg-white">
        <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5H0n5nPYrtJdKeuEQnxeHDTwThraPE7UEJcsx92_Oqgp3u4QC-kC1I0hNak-EltSxW5M&usqp=CAU"}}
        className="h-20 w-20 rounded-full"/>
      <Text className="pt-6 font-bold text-xl px-6">Vishesh</Text>
      <Text className="text-sm pl-32 absolute bottom-6">User since: 27 January, 2023</Text>
    </View>
    
 <TouchableOpacity>
<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-6 bg-white">
 Services
    </Text>
</View>
</TouchableOpacity>

<TouchableOpacity>
<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-10 bg-white">
 Call us:
    </Text>
    <Text className="text-gray-500 text-sm absolute bottom-4 px-10">Mon-Fri  9:00 AM -7:00 PM (Toll Free)</Text>
</View>
</TouchableOpacity>

<TouchableOpacity>
<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-10 bg-white">
 Notifications
    </Text>
    <Text className="text-gray-500 text-sm absolute bottom-4 px-10">To set Notifications</Text>
</View>
</TouchableOpacity>

<TouchableOpacity>
<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-8 bg-white">
 Send Mail
    </Text>
</View>
</TouchableOpacity>

<TouchableOpacity>
<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-10 bg-white">
 Chat with us
    </Text>
</View>
</TouchableOpacity>

<TouchableOpacity>
<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-10 bg-white">
 Vendor Credits
    </Text>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{
    navigation.navigate("Initial")
}}>
<View className="w-90 pt-1">
    <Text className="font-semibold text-lg px-10 pt-6 pb-8 text-red-500 bg-white">
 Log Out
    </Text>
</View>
</TouchableOpacity>
</View>
    
  )
}

export default ProfileScreen;