import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';







const HamburgerMenu = () => {
  const [activeTab, setActiveTab] = useState('Housing');

  const handleTabChange = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <View className='row' >
      <View className='w-1/2' >
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Housing' && styles.activeTab]}
          onPress={() => handleTabChange('Housing')}
        >
          <Text className='text-white' >Housing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Food' && styles.activeTab]}
          onPress={() => handleTabChange('Food')}
        >
          <Text style={styles.tabText}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Health' && styles.activeTab]}
          onPress={() => handleTabChange('Health')}
        >
          <Text style={styles.tabText}>Health and Wealth</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Comfort' && styles.activeTab]}
          onPress={() => handleTabChange('Comfort')}
        >
          <Text style={styles.tabText}>Comfort</Text>
        </TouchableOpacity>
      </View>
      {/* Render tab content based on activeTab */}
      <View style={styles.tabContent}>
        {/* You can render different content for each tab */}
        {activeTab === 'Housing' && <Text className='text-white'>Housing Content</Text>}
        {activeTab === 'Food' && <Text>Food Content</Text>}
        {activeTab === 'Health' && <Text>Health and Wealth Content</Text>}
        {activeTab === 'Comfort' && <Text>Comfort Content</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  menu: {
    backgroundColor: '#333',
    width: 200,
    paddingTop: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  activeTab: {
    backgroundColor: 'blue',
  },
  tabText: {
    color: 'white',
    fontSize: 16,
  },
  tabContent: {
    flex: 1,
    padding: 20,
  },
});

export default HamburgerMenu;
