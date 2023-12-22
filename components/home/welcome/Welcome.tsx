import { useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import { styles, tab, tabText } from './welcome.style'
import { icons, SIZES } from '../../../constants' 

const jobTypes = ["Fulltid", "Deltid", "Intern"]

const Welcome = () => {
  const router = useRouter()

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Halla sjef!</Text>
        <Text style={styles.welcomeMessage}>Velkommen tilbake til din personlige side</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Søk etter en jobb"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer} >
        <FlatList  
          data={jobTypes}
        />
      </View>
    </View>
  )
}

export default Welcome