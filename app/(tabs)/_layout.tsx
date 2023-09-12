import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';
import { initializeApp } from 'firebase/app';
import { firebaseConfig,app } from '@/src/utils/firebase';
import { getAuth } from 'firebase/auth';
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}
import CustomHeader from '@/components/CustomHeader';
import { Stack } from 'expo-router';
import { GluestackUIProvider, Text, Box, config } from "@gluestack-ui/react"

export default function TabLayout({children}:any) {
  const colorScheme = useColorScheme();
  
  const auth = getAuth(app)
  //useAuth();

  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false,
          header:()=> <CustomHeader/>
        }} />
        {<Stack.Screen name="experience" options={{ headerShown: false }} />}
      </Stack>
   
    
    

   
  ) 
}

