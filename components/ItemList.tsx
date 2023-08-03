import React,{useEffect,useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View,Image,ImageBackground } from 'react-native'
import sampleProducts from '../src/utils/db'
import client from '@/src/sanityessentials/sanity'
import { Item } from '@/typings'
//type Props = {}
//merely adding a new line in tsconfig got rid iof the errors
const ItemList = () => {
    const [items, setItems]:any=useState([]);
    
    const loadItems=async()=>{
        //
    /*await client.fetch(`*[_type == 'item']{ name, description

    }`).then((data: any) => { 
    
          //console.log(data)
        setItems((data))
      }).catch(console.error)*/
      setItems(sampleProducts)
    }
    
    useEffect(()=>{
      loadItems();
    },[])
    const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  return (
     <View>
      <StatusBar />
     
      {
         <View className='w-full h-full relative bg-gray-200'>
           <ImageBackground source={image} resizeMode="cover">
           <Text className='text-white font-bold'>item lkist starts here</Text>
        { 
          items?.map((item:Item)=>{
            return (<View className='bg-yellow-200 m-12' key={item.name}>
                  <Text key={item.name} className='text-center text-black'>{item.name}</Text>
                  
            </View>)
            ;
          })
        }
           </ImageBackground>
           <View className='h-full w-full rounded-3xl bg-yellow-300'>
            {

            }
           </View>
       
        </View> 
      }
    </View>
   
  )
}

export default ItemList