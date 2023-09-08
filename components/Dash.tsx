import { View, Text } from 'react-native'
import React from 'react'
import { app } from '@/src/utils/firebase';
//these work when using app as parameter, then usen the return value as paramters for our react-firebase-hooks, i think
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const Dash = () => {
  const db=getFirestore(app);
  
  return (
    <View>
      <View className='flex justify-items-stretch '>
        <View className='flex-1'>
          
        </View>
        
      </View>
      <Text>Das</Text>
    </View>
  )
}

export default Dash