import { View, Text,TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@/src/hooks/useAuth'
import { signInWithEmailAndPassword,getAuth} from 'firebase/auth'
const login = () => {
    const {user} =useAuth();
    const auth=getAuth()
    return (
    <View>
      <Text>login screen</Text>
       <View>
        {
            user? <Text>{user.displayName}</Text> : <></>
        }
       </View>
   
    <TouchableOpacity className='bg-gray-300 justify-center' onPress={()=>{
        signInWithEmailAndPassword(auth,'joshthereactdev@gmail.com','1234')
    }}>
        <Text className='text-center'> Login</Text>
    </TouchableOpacity>
    </View>
  )
}

export default login