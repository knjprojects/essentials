import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {themeColors} from './theme';
import { StatusBar } from 'expo-status-bar';
import { categories, coffeeItems } from '../constants';
import Carousel from 'react-native-reanimated-carousel';
import CoffeeCard from './CoffeeCard';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'




const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth,app} from '../src/utils/firebase'
const fireAuth = auth

import { useCollection,useDocument } from 'react-firebase-hooks/firestore';
import { getFirestore,doc,collection } from 'firebase/firestore';
//import  from './FirebaseMediaStorage';

const firestore=getFirestore(app)
export default function HomeScreen() {
  
    const [value, loading, error] = useDocument(
        doc(firestore, 'Items', '26yUMjONrH8xQSuAvuhD'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );
     
  //const [activeCategory, setActiveCategory] = useState(1);
const [data,setData]:any=useState(null);
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
       <Text>Firestore data is loaded here</Text>
      {
        data!==null? <Text>
            {JSON.stringify(data)}
        </Text> : <></>
      }
      
        <View>
        {error && <Text>Error: {JSON.stringify(error)}</Text>}
        {loading && <Text>Document: Loading...</Text>}
        {value && <Text>Document: {JSON.stringify(value.data())}</Text>}
      </View>
      
      <Image 
        source={require('../assets/images/icon.png')} 
        style={{height: height*0.2}} 
        className="w-full absolute -top-5 opacity-10" />
      <SafeAreaView className={ios? '-mb-8': ''}>
        
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center">
          <Image source={require('../assets/images/splash.png')} 
            className="h-9 w-9 rounded-full" />
          
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text className="font-semibold text-base">
              New York, NYC
            </Text>
          </View>
          <BellIcon size="27" color="black" />
        </View>
        {/* search bar */}
        <View className="mx-5 shadow" style={{marginTop: height*0.06}}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: themeColors.bgLight}}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/* categories */}
        <View className="px-5 mt-6">
         
        </View>
          
      </SafeAreaView>

      {/* coffee cards */}
      <View className={`overflow-visible flex justify-center flex-1 ${ios? 'mt-10':''}`}>
        <View>
          {
            coffeeItems? <View>
                {
                    coffeeItems.map((item:any)=>{
                        return(
                            
                            <CoffeeCard key={item.id} id={item.id} price={item.price} volume={item.volume} image={item.image} name={item.name} stars={item.stars} desc={item.desc}  />
                            
                        );
                    })
                }
            </View> : <Text></Text>
            }
        </View>
        
      </View>
      
      
    </View>
  )
}
/* <View>{
            value? value.docs.map((doc:any) => (
              <Text key={doc.id}>
                {
                  JSON.stringify(doc.data())
                }
              </Text>
            )): <></>
              
          } 
          </View> */
          /*
          
          
             //for retreieving and monotoring the entire state of the collection
    /*const [value, loading, error] =useCollection(
        collection(firestore,'Items')//name of table in firebase firestore database.
    )
    */
    /*const loadUserData=(userId:string)=>{
    if(value!=null && loading==false){
        value.forEach((doc)=>{

        })
    }
    }*/