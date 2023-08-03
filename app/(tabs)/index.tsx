import { StyleSheet } from 'react-native';
import './globals.css'
import EditScreenInfo from '../../components/defaults/EditScreenInfo';
import { Text, View } from '../../components/defaults/Themed';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View className='bg-gray-300'>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <View className='snap-y snap-mandatory h-full w-32'>
        <View className='snap-start bg-gray-500'>
          <Text className='text-yellow-400'>1</Text>
          <Link className='heading bg-blue-300' href='/(tabs)/two' >Go to page two</Link>
        </View>
      </View>
      <View className='snap-y snap-mandatory h-full w-32'>
        <View className='snap-start bg-gray-500'>
          <Text className='text-yellow-400'>1</Text>
          <Link className='heading bg-blue-300' href='/(tabs)/two' >Go to page two</Link>
        </View>
      </View>
      
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
