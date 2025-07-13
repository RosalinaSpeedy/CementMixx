import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { icons } from "../../constants/icons.js"

import styles from './songlist.style'

const LocationButton = ({location}) => {
  return (
    <TouchableOpacity style={styles.locationButton}>
        <Text style={styles.locationText}>{location}</Text>
    </TouchableOpacity>
  )
}

export default LocationButton