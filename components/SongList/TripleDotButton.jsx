import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { icons } from "../../constants"

import styles from './songlist.style'

const TripleDotButton = () => {
  return (
    <TouchableOpacity>
        <Image style={styles.topBarIcon}
            source={icons.tripledot}
        />
    </TouchableOpacity>
  )
}

export default TripleDotButton