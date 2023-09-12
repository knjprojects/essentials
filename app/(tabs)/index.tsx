import { StyleSheet,Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import './globals.css'

import { Link } from 'expo-router';
import HamburgerMenu from '@/components/Hamburger';
import ReanimatedCarosel from '@/components/ReanimatedCarosel';
import HomeScreen from '@/components/HomeScreen';
import Player from '@/components/Player';
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
      <View style={styles.separator}  />
      <HamburgerMenu />
      <View className='h-32 w-32 bg-yellow-400'>
        <Text>yo</Text>
      </View>
      <ReanimatedCarosel/>
      <HomeScreen />
      <Text>Another screen</Text>
      <Player />
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
/*
 <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
        {
          /**<Tabs
  screenOptions={{
    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
  }}>
  <Tabs.Screen
    name="login"
    options={{
      title: 'login',
      tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
      headerRight: () => (
        <Link href="/modal" asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme ?? 'light'].text}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>
      ),
    }}
  />
  
  
</Tabs> */
        /*
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      {/*
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          title: 'Experience',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs> */