import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useNavigation } from 'expo-router';
import { useEffect } from 'react';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
import { getApps, initializeApp } from "firebase/app";
import { firebaseConfig } from "../src/utils/firebase";
import Providers from '@/components/Providers';
import CustomHeader from '@/components/CustomHeader';
import { TouchableOpacity } from 'react-native';
import { BackwardIcon } from 'react-native-heroicons/solid';
//if(getApps().length==0){
    initializeApp(firebaseConfig)
//}



export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  
  const navigation=useNavigation();
  return (
    <Providers><Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false,
          header:()=> <CustomHeader/>
        }} />
        {<Stack.Screen name="(modal)/filter" 
        options={{ headerShown: false,
            //important!!!
            //this changes the component from a page redirect or linbk to a modal
          presentation: "modal",
          headerTitle:'Filter',
          headerShadowVisible:false,
          headerStyle:{},
          headerLeft:()=> (
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
              <BackwardIcon color={'#EF5724'} />
            </TouchableOpacity>
          )
        }} />}
      </Stack></Providers>
      
    
  );
}
