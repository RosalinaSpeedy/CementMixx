import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { HamburgerMenu, CementMixxTitle, SearchButton, TripleDotButton, LocationButton, SongSection } from '../components';

import { registerRootComponent } from 'expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately


const HomePage = () => {
  const [listState, setListState] = useState("Suggested");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topBar}>
          <HamburgerMenu />
          <CementMixxTitle />
          <SearchButton />
          <TripleDotButton />
        </View>
        <View style={styles.locationSelectBar}>
          <LocationButton
            location={"Suggested"}
            listState={listState}
            handlePress={() => setListState("Suggested")}
          />
          <LocationButton
            location={"Songs"}
            listState={listState}
            handlePress={() => setListState("Songs")}
          />
          <LocationButton
            location={"Playlists"}
            listState={listState}
            handlePress={() => setListState("Playlists")}
          />
          <LocationButton
            location={"Folders"}
            listState={listState}
            handlePress={() => setListState("Folders")}
          />
        </View>
        <SongSection
          listState={listState}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E90FF',
    flex: 1
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
