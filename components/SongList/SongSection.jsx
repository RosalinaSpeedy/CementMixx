import React from 'react'
import { Text, Image, TouchableOpacity, View, FlatList } from 'react-native'
import { icons } from "../../constants"

import styles from './songlist.style'

const SongEntryCard = ({ coverArtPath, songTitle, artist }) => {
    return (
        <TouchableOpacity>
            <Image source={coverArtPath} style={styles.cardCoverArt} />
            <Text style={styles.cardSongTitle}>{songTitle}</Text>
            <Text style={styles.cardArtistName}>{artist}</Text>
        </TouchableOpacity>
    )
}

const LastAddedEntryCard = ({ coverArtPath, songTitle, artist, dateAdded }) => {
    return (
        <TouchableOpacity style={styles.lastAddedSongWrapper}>
            <Image source={coverArtPath} style={styles.lastAddedCoverArt}/>
            <View style={styles.lastAddedInfo}>
                <Text style={styles.cardSongTitle}>{songTitle}</Text>
                <Text>10 days ago - {artist}</Text>
            </View>
            <TouchableOpacity>
                <Image
                    style={styles.lastAddedTripleDot}
                    source={icons.tripledot}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const tmpSongs = [
    { coverArtPath: icons.tmpcover, songTitle: "title 1", artist: "artist 1" },
    { coverArtPath: icons.tmpcover, songTitle: "title 2", artist: "artist 2" },
    { coverArtPath: icons.tmpcover, songTitle: "title 3", artist: "artist 3" },
    { coverArtPath: icons.tmpcover, songTitle: "title 4", artist: "artist 4" },
]

const SongSection = ({ listState }) => {
    switch (listState) {
        case "Suggested":
            return (
                <View>
                    <View style={styles.suggestedWrapper}>
                        <View style={styles.suggestedHeaderWrapper}>
                            <Text style={styles.suggestedText}>Recently Played</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAllText}>SEE ALL</Text>
                            </TouchableOpacity>
                        </View>
                        <View><FlatList
                            style={styles.suggestedSongList}
                            data={tmpSongs}
                            renderItem={({ item }) => <SongEntryCard
                                coverArtPath={item.coverArtPath}
                                songTitle={item.songTitle}
                                artist={item.artist}
                            />}
                            ListEmptyComponent={() => (
                                <View><Text>No songs to display</Text></View>
                            )}
                            ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                            horizontal={true}
                        /></View>
                    </View>
                    <View style={styles.suggestedWrapper}>
                        <View style={styles.suggestedHeaderWrapper}>
                            <Text style={styles.suggestedText}>My top tracks</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAllText}>SEE ALL</Text>
                            </TouchableOpacity>
                        </View>
                        <View><FlatList
                            style={styles.suggestedSongList}
                            data={tmpSongs}
                            renderItem={({ item }) => <SongEntryCard
                                coverArtPath={item.coverArtPath}
                                songTitle={item.songTitle}
                                artist={item.artist}
                            />}
                            ListEmptyComponent={() => (
                                <View><Text>No songs to display</Text></View>
                            )}
                            ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                            horizontal={true}
                        /></View>
                    </View>
                    <View style={styles.suggestedWrapper}>
                        <View style={styles.suggestedHeaderWrapper}>
                            <Text style={styles.suggestedText}>Last added</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAllText}>SEE ALL</Text>
                            </TouchableOpacity>
                        </View>
                        <View><FlatList
                            style={styles.suggestedSongList}
                            data={tmpSongs}
                            renderItem={({ item }) => <LastAddedEntryCard
                                coverArtPath={item.coverArtPath}
                                songTitle={item.songTitle}
                                artist={item.artist}
                            />}
                            ListEmptyComponent={() => (
                                <View><Text>No songs to display</Text></View>
                            )}
                            ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                            horizontal={true}
                        /></View>
                    </View>
                </View>
            )
        case "Songs":
            break;
        case "Playlists":
            break;
        case "Folders":
            break;
    }
    return (

        <View>
            <Text>SongSection</Text>
        </View>
    )
}

export default SongSection