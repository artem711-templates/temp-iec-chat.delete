// # PLUGINS IMPORTS //
import React from 'react'
import { StyleSheet } from 'react-native'
import { useTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native-safe-area-context'

// # COMPONENTS IMPORTS //
import { typography, Button } from '@mobile/cp/atoms'
const { Paragraph } = typography

// # EXTRA IMPORTS //
import { useThemeSelector } from '@mobile/redux'

/////////////////////////////////////////////////////////////////////////////

export default function HomeScreen() {
  const { selectedTheme, setTheme } = useThemeSelector()
  const { t } = useTranslation()

  return (
    <SafeAreaView>
      <Paragraph>{t('firstName')}</Paragraph>
      <Button
        text={'Change theme'}
        onPress={() => setTheme(selectedTheme === 'dark' ? 'light' : 'dark')}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
