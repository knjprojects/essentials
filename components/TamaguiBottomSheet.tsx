import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Sheet } from 'tamagui'
const TamaguiBottomSheet = () => {
  return (
    <View>
      <Text>TamaguiBottomSheet</Text>
      <Sheet>
    <Sheet.Overlay />
    <Sheet.Handle />
    <Sheet.Frame>{/* ...inner contents */
    <View>
        <Text>Testing tamagui bottom sheet</Text>
    </View>
    }</Sheet.Frame>
  </Sheet>
    </View>
  )
}

export default TamaguiBottomSheet

