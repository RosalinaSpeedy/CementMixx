import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { icons } from "../../constants"

import styles from './songlist.style'

const HamburgerMenu = () => {
  return (
    <TouchableOpacity>
        <Image style={styles.topBarIcon}
            source={icons.hamburger}
        />
    </TouchableOpacity>
  )
}

export default HamburgerMenu