import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cementMixxTitle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        marginRight: '15%'
    },
    topBarIcon: {
        height: 30,
        width: 30,
        margin: '3%'
    },
    locationButtonWrapper: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ffa500',
        borderBottomWidth: 5
    },
    inactiveLocationButtonWrapper: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '2.5%',
        paddingBottom: '2.5%',
        paddingRight: '0%'
    },
    //'#ffa500'
    ActiveLocationButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '2.5%',
        paddingBottom: '2.5%',
        paddingRight: '0%',
        
    },
    locationText: {
        fontWeight: 'bold',
        color: '#A9A9A9',
        fontSize: 16
    },
    activeLocationText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    suggestedHeaderWrapper: {
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 10
    },
    suggestedText: {
        color: 'white',
        fontSize: 15,
        flex: 1,
        marginLeft: 5
    },
    seeAllText: {
        color: '#111111',
        flex: 1,
        marginRight: 5 
    },
    cardCoverArt: {
        height: 128,
        width: 128
    },
    suggestedWrapper: {
        flexDirection: 'column'
    },
    suggestedSongList: {
        padding: 5,
        marginBottom: 10
    },
    cardSongTitle: {
        color: 'white',
        fontSize: 15,
    },
    cardArtistName: {
        color: '#0000B0',
    },
    lastAddedSongWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lastAddedCoverArt: {
        height: 80,
        width: 80
    },
    lastAddedInfo: {
        padding: 5,
        
    },
    lastAddedTripleDot: {
        height: 40,
        width: 40,
        marginLeft: 39,
        marginRight: 30
    },
    songsWrapper: {
        flexDirection: 'column' 
    },
    songsOrderWrapper: {
        flexDirection: "row",
        marginBottom: 15,
        marginTop: 10,
        alignItems: 'center'
    },
    songsNumberText: {
        color: '#0000B0',
        fontSize: 15,
        flex: 1,
        marginLeft: 5
    },
    titleOrderButton: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 5
    },
    titleOrderText: {
        color: '#0000B0',
        fontSize: 14,
    },
    titleOrderArrow: {
        height: 25,
        width: 25,
        marginLeft: 8,
    },
    songsListCardWrapper: {
        flexDirection: "row",
        width: '100%',
        alignItems: 'center'
    },
    songsListCoverArt: {
        width: 60,
        height: 60,
        borderRadius: 10,
        margin: 5
    },
    songsListCardSongTitle: {
        color: 'white',
        fontSize: 17,
    },
    artistRuntimeText: {
        color: '#0000B0',
        fontSize: 15,
    },
    songsListTripleDot: {
        height: 40,
        width: 40,
        marginRight: 5
    },
    songsListCardInfo: {
        width: '70%'
    },
    plusButtonIcon: {
        height: 40,
        width: 40,
        marginRight: 20,
    },
    playlistsHeader: {
        flexDirection: "row",
        alignItems: 'center'
    },
    playlistCoverArtContainer: {
        width: 80,
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: 5
    },
    playlistCoverArtMember: {
        width: 40,
        height: 40
    },
    playlistCoverArtMemberSolo: {
        width: 80,
        height: 80
    },
    playlistCardWrapper: {
        flexDirection: "row",
        width: '92%',
        alignItems: 'center'
    }
});

export default styles;
