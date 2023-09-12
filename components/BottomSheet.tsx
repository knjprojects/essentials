import { StyleSheet, Text, View } from 'react-native'

type Props = {}





import { BottomSheetModal } from '@gorhom/bottom-sheet'
import React, { useMemo,forwardRef } from 'react' 
export type Ref=BottomSheetModal;
const BottomSheet = forwardRef<Ref>((props: Props,ref) => {
    
    //not sure what this is
    const snapPoints=useMemo(()=>['50%'],[]);
    return (
    <BottomSheetModal ref={ref} 
    overDragResistanceFactor={0}
    backdropComponent={}
    snapPoints={snapPoints}>
        <View>
            <Text>Bottom sheet</Text>
        </View>
    </BottomSheetModal>
    );
});

export default BottomSheet

