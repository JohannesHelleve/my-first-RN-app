import { useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import  styles  from './welcome.style'
import { icons, SIZES } from '../../../constants' 

const jobTypes = ["Fulltid", "Deltid", "Intern"]

const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState(jobTypes[0])

  const styleWithProps = styles(activeJobType)

  return (
    <View>
      <View style={styleWithProps.container}>
        <Text style={styleWithProps.userName}>Halla sjef!</Text>
        <Text style={styleWithProps.welcomeMessage}>Velkommen tilbake til din personlige side</Text>
      </View>
      <View style={styleWithProps.searchContainer}>
        <View style={styleWithProps.searchWrapper}>
          <TextInput
            style={styleWithProps.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Søk etter en jobb"
          />
        </View>
        <TouchableOpacity style={styleWithProps.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styleWithProps.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styleWithProps.tabsContainer} >
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              //item was not in the scope so the stylesheet is conditional. Takes 1 or 2 arguments
              style={styles(activeJobType, item).tab}
              onPress={() => {
                setActiveJobType(item);
                router.push('/search/${item}')
              }}
            >
              <Text style={styleWithProps.tabText}>{item}</Text>
            </TouchableOpacity>
          )} 
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome