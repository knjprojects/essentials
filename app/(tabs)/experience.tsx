import React,{useEffect,useState,useLayoutEffect} from 'react';
import { useNavigation } from 'expo-router';
import * as Icon from 'react-native-feather'
import { Dimensions, Text, View,ScrollView,TextInput} from 'react-native';
//import Carousel from 'react-native-reanimated-carousel';
import ReanimatedCarosel from '../../components/ReanimatedCarosel';
import { useCartStore } from '@/src/zustand/cart.zustand.store';
import ItemList from '@/components/ItemList';
const Experience=() =>{
    const zustandCart=useCartStore((state)=>state.tempOrder)
    const [featuredCategories, setFeaturedCategories] = useState([])
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({headerShown: false})
    }, [])
    useEffect(()=>{
       /* getFeaturedDishes().then(data=>{
            setFeaturedCategories(data);
        })*/
    },[])
    return (
        <View className=''>
              {/* search bar */}
        <View className="flex-row items-center space-x-2 px-4 pb-2 ">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholder='Resturants' className="ml-2 flex-1" keyboardType='default' />
                <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                    <Icon.MapPin height="20" width="20" stroke="gray" />
                    <Text className="text-gray-600">New York, NYC</Text>
                </View>
            </View>
            <View className="p-3 rounded-full">
                <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
            </View>
    </View>

         

    {/* main */}
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 50
        }}
    >
       <ItemList />
       
        

        
       
    </ScrollView>
           <ReanimatedCarosel />
        </View>
    );
}

export default Experience;