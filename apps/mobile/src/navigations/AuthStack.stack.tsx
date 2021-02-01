// # PLUGINS IMPORTS //
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// # COMPONENTS IMPORTS //
import AuthChatScreen from '../screens/scenes/AuthChat.screen'
import AuthBoardingScreen from '../screens/scenes/AuthBoarding.screen'

// # EXTRA IMPORTS //
import { IAuthStackParams } from './typings'

/////////////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator<IAuthStackParams>()
export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'AuthBoardingScreen'}
        component={AuthBoardingScreen}
      />
      <Stack.Screen name={'AuthChatScreen'} component={AuthChatScreen} />
    </Stack.Navigator>
  )
}
