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
    }
});

export default styles;
