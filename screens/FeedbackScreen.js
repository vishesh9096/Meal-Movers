import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';
import moment from 'moment';

const FeedbackScreen = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState(null);
    const [rating, setRating] = useState(0);
    const [Fname,setFname] = useState("");
    const [Uname,setUname]= useState("");
    const [desc,setdesc]= useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);


    const data = [
        { label: 'Vishesh', value: 'Vishesh' },
        { label: 'Kresha', value: 'Kresha' },
        { label: 'Pankhudi', value: 'Pankhudi' },
        { label: 'Admin', value: 'Admin' },
        
       
      ];

      const handleClick =async()=>{
        
        
        console.log("func called")
        await axios.post('http://192.168.0.104:5500/Review',{
          Pname:"Review",
          Fname:Fname,
          Uname:Uname,
          Rating:Rating,
          myDate:moment().subtract(6, 'days').calendar(),
          desc:desc,



          
        })
        
      }
  return (
    <SafeAreaView>
        <Text className="text-3xl text-center font-bold">FeedBack</Text>
        <View className="px-5">
        


         <View className="pt-4 pb-3">
        <AirbnbRating 
        onFinishRating={value=>{setRating(value)}}
        />

        <Text className="text-2xl pt-2 text-center pb-2">How was you over all experience? </Text>  
        </View>
        <View>
            <Text className="text-xl pt-4 pb-2">Enter your name</Text>
            <TextInput 
            value={Uname}
            onChangeText={(Uname) => {
                setUname(Uname)
            }}
             className="text-2xl pl-2  bg-white shadow-xl shadow-black rounded-lg w-full h-12 "  />
            </View>

        <Text className="text-xl pt-4 pb-2">Select your Provider</Text>
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
                placeholder="Select Provider"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                setFname(item.value);
                }}
                renderLeftIcon={() => (
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                )}
            />

            <View>
            <Text className="text-xl pt-4 pb-2">Share your experience </Text>
            <TextInput 
            value={desc}
            onChangeText={(desc) => {
                setdesc(desc)
            }}
             className="text-2xl pl-2  bg-white shadow-xl shadow-black rounded-lg w-full h-12 "  />
            </View>

        </View>
        <View className="px-5 pt-20">
        <TouchableOpacity
        onPress={()=>{alert("Your feed back has been uploaded")}}
            >
                <View className="w-full bg-[#0A2647] h-12 rounded-2xl">
                    <Text className="text-center text-white font-bold text-4xl pt-1">Submit</Text>

                </View>

            </TouchableOpacity>
            </View>
    </SafeAreaView>
  )
}

export default FeedbackScreen


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