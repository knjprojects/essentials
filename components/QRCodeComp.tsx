import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
const QRCodeComp = (props: Props) => {
  return (
    <View className='w-full h-full bg-black items-center'>

      <QRCode value={'nigga'} />
      <Text onPress={()=>{}}>Open qr code scanner</Text>
    </View>
  )
}

export default QRCodeComp

