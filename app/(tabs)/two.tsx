import { StyleSheet,Text,View } from 'react-native';


import './globals.css'
import { useLocalSearchParams } from 'expo-router';
import QRCodeComp from '@/components/QRCodeComp';
import Gallery from '@/components/Gallery';
export default function TabTwoScreen() {
  const params = useLocalSearchParams();
    const {essential}=params;
  return (
    <View style={styles.container}>
      <Text className='text-black font-bold'>Tab Two with {essential}</Text>
      <View style={styles.separator} />
      <QRCodeComp />
        <Gallery />
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
