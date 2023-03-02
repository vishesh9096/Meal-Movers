import { View, Text, SafeAreaView} from 'react-native'
import MapView ,{Marker} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';


const MapScreen = () => {
    const navigation = useNavigation();

     useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <SafeAreaView className="h-full bg-white">
        <View className="h-96 ">
         <MapView
        initialRegion={{
            latitude:19.0596,
            longitude: 72.8295,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
        }}
    className="flex-1 -mt-10 z-0"
    mapType="mutedStandard"
  >
    <Marker
    coordinate={{
     latitude: "19.0596",
     longitude: "72.8295",
    }}
    title="Kresha Mehta"
    description='provider'
    pinColor='#253d59'
    identifier='origin'
    />

<Marker
    coordinate={{
     latitude: "19.0700",
     longitude: "72.8338",
    }}
    title="Vishesh Gatha"
    description='provider'
    pinColor='#253d59'
    identifier='origin'
    />

<Marker
    coordinate={{
     latitude: "19.0645",
     longitude: "72.8359",
    }}
    title="Pankhudi Jaiswal"
    description='provider'
    pinColor='#253d59'
    identifier='origin'
    />

<Marker
    coordinate={{
     latitude: "19.0545",
     longitude: "72.8282",
    }}
    title="Your location"
    description='customer'
    pinColor='red'
    identifier='origin'
    />
  </MapView>

</View>


<SafeAreaView className="bg-white  flex-row items-center space-x-5 h-28">
    <Image
    source={{
        uri:"https://static.toiimg.com/photo/msid-81923053/81923053.jpg",
    }}
    className="h-14 w-14 bg-gray-300 p-4 rounded-full ml-5"
    />
    <View className="">
        <Text className="text-lg font-semibold ">
            Kartike abcd
        </Text>
        <Text className="">
            Your rider
        </Text>
    </View>
    <TouchableOpacity>
    <Text className="text-blue-400 text-xl font-bold pl-36">
        Call
    </Text>
    </TouchableOpacity>

    



</SafeAreaView>
<Text className="text-3xl font-bold pl-3">Order Placed!</Text>
<View className="px-5 pt-60">
    <TouchableOpacity
        onPress={()=>navigation.navigate("Ani3")}
            >
                <View className="w-full bg-[#0A2647] h-12 rounded-2xl">
                    <Text className="text-center text-white font-bold text-4xl pt-1">Home</Text>

                </View>

            </TouchableOpacity>
    </View>


     
    </SafeAreaView>
  )
}

export default MapScreen;