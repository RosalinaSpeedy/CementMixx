// monorepo/apps/expo-app/index.ts
//import "expo-router/entry";
import { registerRootComponent } from 'expo';

import App from './app/index.js';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
//AppRegistry.registerComponent('main', () => App);