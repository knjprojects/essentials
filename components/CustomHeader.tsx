import { SafeAreaView, Text, View } from 'react-native'
type Props = {}



import React, { useRef } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import BottomSheet from './BottomSheet'
const CustomHeader = (props: Props) => {
    const bottomSheetRef=useRef<BottomSheetModal>(null);
    const openModal=()=>{
        bottomSheetRef.current?.present();
    }
return (
    <SafeAreaView className='flex flex-1 bg-slate-100'>

        <View className=' max-h-80 bg-re d-600'>
            
        </View>
        <BottomSheet ref={bottomSheetRef} />

    </SafeAreaView>
    )
}

export default CustomHeader

