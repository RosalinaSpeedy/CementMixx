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
    }
});

export default styles;
