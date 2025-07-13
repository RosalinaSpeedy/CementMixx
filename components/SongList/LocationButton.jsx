import React from 'react'
import { Text, Image, TouchableOpacity, View } from 'react-native'
import { icons } from "../../constants/icons.js"

import styles from './songlist.style'

const LocationButton = ({location, handlePress, listState}) => {
  return (
    <View style={listState === location ? styles.locationButtonWrapper : styles.inactiveLocationButtonWrapper}>
        <TouchableOpacity style={styles.locationButton} onPress={handlePress}>
            <Text style={listState === location ? styles.activeLocationText : styles.locationText}>{location}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LocationButton