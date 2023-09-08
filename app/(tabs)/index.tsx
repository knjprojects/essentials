import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import './globals.css'
import EditScreenInfo from '../../components/defaults/EditScreenInfo';
import { Text, View } from '../../components/defaults/Themed';
import { Link } from 'expo-router';
import HamburgerMenu from '@/components/Hamburger';
import ReanimatedCarosel from '@/components/ReanimatedCarosel';
import HomeScreen from '@/components/HomeScreen';
export default function TabOneScreen() {
  return (
    <View className='bg-gray-300'>
       <Link
        href={{
          pathname: "/experience",
          // /* 1. Navigate to the details route with query params */
          params: { essential: 'money' },
        }}
      >
        Go to Experience HomeScreen
      </Link>
      <ScrollView>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HamburgerMenu />
      <View className='h-32 w-32 bg-yellow-400'>
        <Text>yo</Text>
      </View>
      <ReanimatedCarosel/>
      <HomeScreen />
      <Text>Another screen</Text>
     
      </ScrollView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
