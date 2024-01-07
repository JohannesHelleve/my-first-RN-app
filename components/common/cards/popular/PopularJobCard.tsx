import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import { checkImageURL } from '../../../../utils'

interface PopularJobCardProps {
  item: any
  selectedJob: string
  handleCardPress: (item: any) => void
}

const PopularJobCard = ({ item, selectedJob, handleCardPress}: PopularJobCardProps) => {

  const styleWithProps =  styles(item, selectedJob)

  return (
    <TouchableOpacity
      style={styleWithProps.container}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styleWithProps.logoContainer}>
        <Image 
        source={{uri: checkImageURL(item?.employer_logo)
          ? item.employer_logo
          : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
      }} 
        resizeMode="contain"
        style={styleWithProps.logoImage} />
      </TouchableOpacity>
      <Text style={styles(item, selectedJob).companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styleWithProps.infoContainer}>
        <Text style={styleWithProps.jobName} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styleWithProps.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard