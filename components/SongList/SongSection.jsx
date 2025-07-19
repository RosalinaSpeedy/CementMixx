import React, { useState } from 'react'
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
            <Image source={coverArtPath} style={styles.lastAddedCoverArt} />
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

const SongsListSongEntryCard = ({ coverArtPath, songTitle, artist, runtime }) => {
    return (
        <TouchableOpacity style={styles.songsListCardWrapper}>
            <Image source={coverArtPath} style={styles.songsListCoverArt} />
            <View style={styles.songsListCardInfo}>
                <Text style={styles.songsListCardSongTitle}>{songTitle}</Text>
                <Text style={styles.artistRuntimeText}>{artist} - {runtime}</Text>
            </View>
            <TouchableOpacity>
                <Image
                    style={styles.songsListTripleDot}
                    source={icons.tripledot}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const tmpSongs = [
    { coverArtPath: icons.tmpcover, songTitle: "title 1", artist: "artist 1", runtime: "2:52" },
    { coverArtPath: icons.tmpcover, songTitle: "title 2", artist: "artist 2", runtime: "2:52" },
    { coverArtPath: icons.tmpcover, songTitle: "title 3", artist: "artist 3", runtime: "2:52" },
    { coverArtPath: icons.tmpcover, songTitle: "title 4", artist: "artist 4", runtime: "2:52" },
]

const SongSection = ({ listState }) => {
    const [songListTitleOrder, setSongListTitleOrder] = useState(true);
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
            return (
                <View style={styles.songsWrapper}>
                    <View style={styles.songsOrderWrapper}>
                        <Text style={styles.songsNumberText}>1022 Songs</Text>
                        <TouchableOpacity style={styles.titleOrderButton} onPress={() => setSongListTitleOrder(!songListTitleOrder)}>
                            <Text style={styles.titleOrderText}>Title</Text>
                            <Image 
                                source={songListTitleOrder ? icons.arrowdown : icons.arrowup} 
                                style={styles.titleOrderArrow}
                            />
                        </TouchableOpacity>
                    </View>
                    <View><FlatList
                        style={styles.mainSongslist}
                        data={tmpSongs}
                        renderItem={({ item }) => <SongsListSongEntryCard
                            coverArtPath={item.coverArtPath}
                            songTitle={item.songTitle}
                            artist={item.artist}
                            runtime={item.runtime}
                        />}
                        ListEmptyComponent={() => (
                            <View><Text>No songs to display</Text></View>
                        )}
                        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                        horizontal={false}
                    /></View>
                </View>
            )
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