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

const PlaylistEntryCard = ({ songList, title }) => {
    const createCover = () => {
        let coverart = [];
        if (songList.length >= 4) {
            for (let i = 0; i < 4; i++) {
                coverart.push(<Image source={songList[i].coverArtPath} style={styles.playlistCoverArtMember} key={i}/>);
            }
        } else {
            coverart.push(<Image source={songList[0].coverArtPath} style={styles.playlistCoverArtMemberSolo} key={0}/>);
        }
        return (
            <View style={styles.playlistCoverArtContainer}>
                {coverart}
            </View>
        );
    }
    return (
        <TouchableOpacity style={styles.playlistCardWrapper}>
            <View>
                {createCover()}
            </View>
            <View style={styles.songsListCardInfo}>
                <Text style={styles.songsListCardSongTitle}>{title}</Text>
                <Text style={styles.artistRuntimeText}>{songList.length} {songList.length > 1 ? "Songs" : "Song"}</Text>
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
const tmpPlaylists = [
    {songList: tmpSongs, title: "test playlist 1"},
    {songList: tmpSongs, title: "test playlist 2"},
    {songList: tmpSongs, title: "test playlist 3"},
    {songList: [tmpSongs[0]], title: "test playlist 4"},
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
            return (
                <View style={styles.playlistsWrapper}>
                    <View style={styles.playlistsHeader}>
                        <Text style={styles.songsNumberText}>PLAYLISTS (25)</Text>
                        <TouchableOpacity style={styles.plusButton}>
                            <Image
                                source={icons.plus}
                                style={styles.plusButtonIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.songsListTripleDot}
                                source={icons.tripledot}
                            />
                        </TouchableOpacity>
                    </View>
                    <View><FlatList
                        style={styles.mainSongslist}
                        data={tmpPlaylists}
                        renderItem={({ item }) => <PlaylistEntryCard
                            title={item.title}
                            songList={item.songList}
                        />}
                        ListEmptyComponent={() => (
                            <View><Text>No songs to display</Text></View>
                        )}
                        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                        horizontal={false}
                    /></View>
                </View>
            )
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