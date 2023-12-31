
import React from 'react'
import { useColorScheme } from 'react-native';
import { GluestackUIProvider, Text, Box, config } from "@gluestack-ui/react"
type Props = {}
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper'
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet'
const Providers = ({children}:any) => {
    const colorScheme=useColorScheme();
  return (
    <GluestackUIProvider config={config.theme}>
      <PaperProvider ><ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </ThemeProvider> </PaperProvider>
    </GluestackUIProvider>
    )
}

export default Providers
/***/