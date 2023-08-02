import React,{useEffect,useState} from 'react'
import { Text, View } from './defaults/Themed'
import { getItems } from '@/src/sanityessentials/sanity_utils'
import { Item } from '@/typings'
type Props = {}

const ItemList = (props: Props) => {
    const [items, setItems]:any=useState([]);
    
    const loadItems=async()=>{
        //
        getItems().then((data: Item[]) => { 
    
          console.log(data)
        setItems((data))
      })}
    
    useEffect(()=>{
      loadItems();
    },[])
  return (
    <View>
      {
        items? <View className='w-full h-full relative bg-gray-200'>
        <Text className='text-black font-bold'>item lkist starts here</Text>
        {
          items?.map((item:Item)=>{
            return (<View className='bg-yellow-200' key={item.slug}>
                  <Text className='text-center text-ellipsis text-black'>{item.name}</Text>
            </View>)
            ;
          })
        }
        </View> :<></>
      }
    </View>
  )
}

export default ItemList