import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { icons } from "../../constants"

import styles from './songlist.style'

const SearchButton = () => {
  return (
    <TouchableOpacity>
        <Image style={styles.topBarIcon}
            source={icons.search}
        />
    </TouchableOpacity>
  )
}

export default SearchButton