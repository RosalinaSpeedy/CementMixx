import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { HamburgerMenu, CementMixxTitle, SearchButton, TripleDotButton, LocationButton, SongSection } from '../components';

import { registerRootComponent } from 'expo';
import { SafeAreaView } from 'react-native-safe-area-context';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately


const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <HamburgerMenu />
        <CementMixxTitle />
        <SearchButton />
        <TripleDotButton />
      </View>
      <View style={styles.locationSelectBar}>
        <LocationButton
          location={"Suggested"}
        />
        <LocationButton
          location={"Songs"}
        />
        <LocationButton
          location={"Playlists"}
        />
        <LocationButton
          location={"Folders"}
        />
      </View>
      <SongSection />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E90FF',
  },
  topBar: {
    flexDirection: 'row',
    width: '90%',
    padding: '1%',
    alignItems: 'center'
  },
  locationSelectBar: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    paddingTop: '4%'
  }
});

registerRootComponent(HomePage);

export default HomePage;
