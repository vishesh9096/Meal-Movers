import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/mini';
import { SliderPicker } from 'react-native-slider-picker';
import axios from 'axios';
import moment from 'moment';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';


const NewScreen = () => {
    const [Pname,setPname] = useState("Vishesh");
    const [Fname,setFname] = useState("");
    const [Quantity,setQuantity] = useState(0);
    const [Expiry,setExpiry] = useState("");
    const [Category,setCategory] = useState("");
    const [Lat,setLat] = useState("");
    const [Long,setLong] = useState("");
    const [Age,setAge] = useState("");
    const [Time,setTime] = useState("");
    const [Date,setDate] = useState("");
    const [price,setPrice] = useState(0);
    const [Iurl,setIurl]= useState("https://cdn-icons-png.flaticon.com/512/1037/1037855.png")
    const [value, setValue] = useState(null);


    const data = [
        { label: 'Packets', value: 'Packets' },
        { label: 'Kg', value: 'Kg' },
        { label: 'Servings', value: 'Serving' },
        { label: 'Litre', value: 'Litre' },
        { label: 'Slices', value: 'Slices' },
       
      ];



    const handleClick =async()=>{
        
        
        console.log("func called")
        await axios.post('http://192.168.0.104:5500/cTour',{
          Pname:"Vishesh",
          Fname:Fname,
          Quantity:Quantity,
          Category:Category,
          price:price,
          Expiry:Expiry,
          Ilink:Iurl,
          myDate:moment().calendar(),

          unit:value,

          
        })
        
      }




    const navigation = useNavigation();
  useLayoutEffect(()=>
  navigation.setOptions({
      headerShown: false,
      
  })
  )

  
  return (
    <SafeAreaView className="h-full bg-gray-100">
        


        <View className="flex-row items-end gap-x-16 pl-5">
        <TouchableOpacity
        onPress={()=>{navigation.navigate("PHome")}} >
            <ArrowLeftIcon size={32} color={"black"}/>
        </TouchableOpacity>
        <Text className="text-3xl  font-bold text-center pt-4">Add New Item</Text>
        </View>

        <ScrollView className="px-8 pt-5 gap-y-6">

            <View>
                <View className="flex-row items-center">
            <Text className=" text-2xl text-gray-500 font-semibold">Item name</Text>
            <Text className=" text-2xl text-red-500 font-semibold"> *</Text>
            </View>
            <TextInput 
            value={Fname}
            onChangeText={(Fname) => {
                setFname(Fname)
            }}
             className="text-2xl pl-2  bg-white shadow-xl shadow-black rounded-lg w-full h-12 "  />
            </View>


            <View>
            <View className="flex-row items-center">
            <Text className=" text-2xl text-gray-500 font-semibold">Category</Text>
            <Text className=" text-2xl text-red-500 font-semibold"> *</Text>
            </View>
            <TextInput 
            value={Category}
            onChangeText={(Category) => {
                setCategory(Category)
            }}
            className="text-2xl pl-2  bg-white shadow-xl shadow-black rounded-lg w-full h-12 " />
            </View>

            <View>
            <View className="flex-row items-center">
            <Text className=" text-2xl text-gray-500 font-semibold">Price</Text>

            </View>
            <TextInput 
            value={price}
            onChangeText={(price) => {
                setPrice(price)
            }}
            className="text-2xl pl-2  bg-white shadow-xl shadow-black rounded-lg w-full h-12 " />
            </View>


            <View>
            <View className="flex-row items-center">
            <Text className=" text-2xl text-gray-500 font-semibold">Quantity</Text>
            <Text className=" text-2xl text-red-500 font-semibold"> *</Text>
            <Text className=" text-3xl pl-32  font-semibold">{Quantity} {value}</Text>
            </View>
            <SliderPicker 


            maxValue={50}
            minValue={1}
            labelFontColor={"#6c7682"}
            labelFontWeight={'200'}
            showFill={true}
            fillColor={'#0A2647'}
            
            
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

            <View>
                <View className="flex-row items-center">
            <Text className=" text-2xl text-gray-500 font-semibold">Units</Text>
            <Text className=" text-2xl text-red-500 font-semibold"> *</Text>
            

            </View>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                setValue(item.value);
                }}
                renderLeftIcon={() => (
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                )}
            />
            
            </View>

            <View>
            <View className="flex-row items-center">
            <Text className=" text-2xl text-gray-500 font-semibold">Expiry(in Days)</Text>
            <Text className=" text-2xl text-red-500 font-semibold"> *</Text>
            <Text className=" text-3xl pl-24  font-semibold">{Expiry} Days</Text>
            </View>
            <SliderPicker 



                maxValue={10}
                minValue={0}
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
                setExpiry(position);
              }}
           
        />
            </View>

            <View>
            <View className="flex-row items-center">
            <Text className=" text-2xl text-gray-500 font-semibold">Image link</Text>

            </View>
            <TextInput 
            
            onChangeText={(Iurl) => {
                setIurl(Iurl)
            }}
            className="text-2xl pl-2  bg-white shadow-xl shadow-black rounded-lg w-full h-12 " />
            </View>


            <TouchableOpacity
            onPress={()=>{handleClick();navigation.navigate("Ani2")}}>
                <View className="w-full bg-[#0A2647] h-20 rounded-2xl">
                    <Text className="text-center text-white font-bold text-4xl pt-5">Submit</Text>

                </View>

            </TouchableOpacity>

        <View className="h-80"></View>

        </ScrollView>
        
    </SafeAreaView>
  )
}

export default NewScreen






const styles = StyleSheet.create({
    dropdown: {
      backgroundColor:"white",
      height: 50,
      borderBottomColor: 'gray',
      borderRadius:10
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      padding:2
    },
    iconStyle: {
      width: 20,
      height: 20,
      
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });