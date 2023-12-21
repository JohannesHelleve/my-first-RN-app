import { useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import { styles, tab, tabText } from './welcome.style'
import { icons, SIZES } from '../../../constants' 

const Welcome = () => {
  const router = useRouter()

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Halla sjef!</Text>
        <Text style={styles.welcomeMessage}>Velkommen tilbake til din personlige side</Text>
      </View>
      <View style={styles.container}>

      </View>
    </View>
  )
}

export default Welcome