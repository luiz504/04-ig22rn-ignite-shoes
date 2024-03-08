import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { NotificationClickEvent, OneSignal } from 'react-native-onesignal'
import { ANDROID_ONESIGNAL_APP_ID } from '@env'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { CartContextProvider } from '~/contexts/CartContext'

import { THEME } from '~/theme'

import { Loading } from '~/components/Loading'
import { Routes } from '~/routes'
import { createTagUserInfo } from '~/notifications/notifications-tags'
import { useEffect } from 'react'

OneSignal.initialize(ANDROID_ONESIGNAL_APP_ID)
OneSignal.Notifications.requestPermission(true)
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  useEffect(() => {
    createTagUserInfo()
  }, [])

  useEffect(() => {
    const handleClick = (event: NotificationClickEvent): void => {
      const { actionId } = event.result

      switch (actionId) {
        case '1':
          console.log('Ver todos')
          break
        case '2':
          console.log('Ver pedido')
          break
        default:
          console.log('Nenhuma ação definida')
          break
      }
    }

    OneSignal.Notifications.addEventListener('click', handleClick)
  }, [])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  )
}
