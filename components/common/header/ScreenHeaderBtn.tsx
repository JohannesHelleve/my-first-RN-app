import React from 'react'
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native'

import { btnImg, styles} from './screenheader.style'

type ScreenHeaderBtnProps = {
  iconUrl: ImageSourcePropType,
  dimension: string
  handlePress?: () => void
}

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
        source={iconUrl}
        resizeMode="cover"
        style={btnImg(dimension)} 
      />

    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn