import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { SliderPicker } from 'react-native-slider-picker';
const Tour = require("../backend/model/tour");


const ProductScreen = () => {
    
   
    const navigation = useNavigation();
    const [Quantity,setQuantity] = useState(0);
    
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
    /////////////////////
    const route = useRoute();

  return (
    <ScrollView>
    <View>
        <View>
            <Image 
            className="w-full h-80"
            source={{uri:`${route.params.Ilink}`}}/>
        </View>
        <Text className="text-2xl font-bold pt-3 pl-3">{route.params.name}</Text>
        <Text className="pt-1 pl-3 text-md text-bold text-gray-500">{route.params.unit}</Text>

        <View className="pt-4 pl-3  w-32 h-12">
            <View className="w-32 h-8 rounded-l-full rounded-r-full bg-white border-2 border-[#BFEAF5]">
                <Text className="text-center pt-1 text-md">{route.params.Pname}</Text>
            </View>

        </View>

        <View className="flex-row pl-8 space-x-12 pt-4 items-center">
            <View className="flex items-center">
                <Text className="text-2xl font-semibold">{route.params.Quantity}</Text>
                <Text>{route.params.unit}</Text>
            </View>
            <View className="flex items-center">
                <Text className="text-2xl font-semibold">{route.params.Age}</Text>
                <Text>Days Old</Text>
            </View>
            <View className="flex items-center">
                <Text className="text-2xl font-semibold">{route.params.price}</Text>
                <Text>Rupees</Text>
            </View>
            <View className="flex items-center">
                <Text className="text-2xl font-semibold">{route.params.Expiry}</Text>
                <Text>Days Left</Text>
            </View>
        </View>

        <View className="pl-3 pt-6 ">
            <Text className="text-2xl font-bold">Details:</Text>
            <Text className="text-lg pl-2 pt-2">Posted on : {route.params.myDate}</Text>
            <Text className="text-lg pl-2 pt-2">Category : {route.params.Category}</Text>

        </View>

        <View>

        <Text className="text-2xl font-bold pl-8 pt-4">Quantity to Order:  {Quantity} {route.params.unit}</Text>
        <SliderPicker 


        maxValue={route.params.Quantity}
        minValue={1}
        labelFontColor={"#6c7682"}
        labelFontWeight={'200'}
        showFill={true}
        fillColor={'#0A2647'}
        showNumberScale={true}
        showSeparatorScale={true}

        buttonBackgroundColor={'#fff'}
        buttonBorderColor={"#6c7682"}
        buttonBorderWidth={1}
        scaleNumberFontWeight={'300'}
        buttonDimensionsPercentage={6}
        heightPercentage={1}
        widthPercentage={80}
        callback={position => {
            setQuantity(position);
        }}

/>
        </View>
        <View className="px-6 pt-4">
        <TouchableOpacity
        onPress={()=>{
            
            navigation.navigate("Map")}}
            >
                <View className="w-full bg-[#0A2647] h-14 rounded-2xl">
                    <Text className="text-center text-white font-bold text-4xl pt-2">Place Order</Text>

                </View>

            </TouchableOpacity>

            </View>
        


    </View>
    </ScrollView>
  )
}

export default ProductScreen