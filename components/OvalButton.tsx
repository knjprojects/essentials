import React from 'react';
import { Text,View,Button, TouchableOpacity } from 'react-native';
const OvalButton = () => {
  return (
    <TouchableOpacity className="relative overflow-hidden rounded-full p-4 bg-gray-300 hover:bg-green-500">
      <Text className="absolute top-0 left-0 w-0 h-full bg-green-500 transition-all ease-in-out duration-300"></Text>
    </TouchableOpacity>
  );
};

export default OvalButton;
