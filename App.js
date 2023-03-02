import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomerHomeScreen from './screens/Customer/CustomerHomeScreen';
import ProviderHomeScreen from './screens/Provider/ProviderHomeScreen';
import InitialScreen from './screens/InitialScreen';
import CLoginScreen from './screens/Customer/CLoginScreen';
import PLoginScreen from './screens/Provider/PLoginScreen';
import AllItemsScreen from './screens/Provider/AllItemsScreen';
import NewScreen from './screens/Provider/NewScreen';
import Ani2Screen from './screens/Ani2Screen';
import ProfileScreen from './screens/ProfileScreen';
import CDashboardScreen from './screens/CDashboardScreen';
import CookedScreen from './screens/CookedScreen';
import RawScreen from './screens/RawScreen';
import PackagedScreen from './screens/PackagedScreen';
import DonationScreen from './screens/DonationScreen';
import ProductScreen from './screens/ProductScreen';
import AniScreen3 from './screens/AniScreen3';
import MapScreen from './screens/MapScreen';
import NotificationScreen from './screens/NotificationScreen';
import Community from './screens/Community';
import FeedbackScreen from './screens/FeedbackScreen';
import AdminScreen from './screens/AdminScreen';
import AniScreen1 from './screens/AniScreen1';
import * as Linking from 'expo-linking';






const Stack = createNativeStackNavigator();

export default function App() {
  Linking.makeUrl()
  return (
    <NavigationContainer>
    <TailwindProvider>
    <Stack.Navigator>
    <Stack.Screen name="Ani1" component={AniScreen1} />
    <Stack.Screen name="Initial" component={InitialScreen} />
    <Stack.Screen
         name="Ani3" 
         component={AniScreen3} 
         options={{ presentation: "fullScreenModal", headerShown: false }}
         />
    
    <Stack.Screen name="Map" component={MapScreen} />

    

    
    
        
        <Stack.Screen name="New" component={NewScreen} />
        <Stack.Screen name="AllItems" component={AllItemsScreen} />
        <Stack.Screen name="PHome" component={ProviderHomeScreen} />
        <Stack.Screen name="PLogin" component={PLoginScreen} />
        <Stack.Screen name="CLogin" component={CLoginScreen} />
        <Stack.Screen name="CHome" component={CustomerHomeScreen} />
        <Stack.Screen name="Ani2"  component={Ani2Screen} />
        <Stack.Screen name="Profile"  component={ProfileScreen} />
        <Stack.Screen name="CDashboard" component={CDashboardScreen}/>
        <Stack.Screen name="Feedback" component={FeedbackScreen}/>
        <Stack.Screen name="Admin" component={AdminScreen}/>
        <Stack.Screen name="Notification" component={NotificationScreen}
        Options = {{headerShown: false}}/>
        <Stack.Screen name="Cooked" component={CookedScreen}
        Options = {{headerShown: false}}/>
        
         <Stack.Screen name="Raw" component={RawScreen}
        Options = {{headerShown: false}}/>
        <Stack.Screen name="Packed" component={PackagedScreen}
        Options = {{headerShown: false}}/>
         <Stack.Screen name="Donation" component={DonationScreen}
        Options = {{headerShown: false}}/>
        <Stack.Screen name="Product" component={ProductScreen}
        Options = {{headerShown: false}}/>
        <Stack.Screen name="Commu" component={Community} />
        

        
         
      </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}


