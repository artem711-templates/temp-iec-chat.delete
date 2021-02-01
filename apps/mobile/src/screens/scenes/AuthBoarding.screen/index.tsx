// # PLUGINS IMPORTS //
import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as LocalAuthentication from 'expo-local-authentication'

// # COMPONENTS IMPORTS //
import { CButton } from '@mobile/cp/atoms'

// # EXTRA IMPORTS //
import { StackNavigationProp } from '@react-navigation/stack'
import { IAuthStackParams } from 'apps/mobile/src/navigations/typings'

/////////////////////////////////////////////////////////////////////////////

type ScreenNavigationProp = StackNavigationProp<
  IAuthStackParams,
  'AuthBoardingScreen'
>
export default function AuthBoarding() {
  const navigation = useNavigation<ScreenNavigationProp>()

  async function makeLocalAuth() {
    const available = await LocalAuthentication.hasHardwareAsync()
    if (available) {
      const res = await LocalAuthentication.authenticateAsync({})
      console.log(res)
    }
  }

  return (
    <View>
      <Text>AuthBoarding</Text>
      <CButton
        text={'Go to auth chat'}
        onPress={() => navigation.navigate('AuthChatScreen')}
      />
      <CButton text={'Local auth'} onPress={makeLocalAuth} />
    </View>
  )
}
