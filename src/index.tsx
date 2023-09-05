import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Router from './router';
import {persistStore} from 'redux-persist';
import FullScreenLoader, {
  loaderRefType,
} from './components/Loader/FullScreenLoader';
import DropdownAlert from 'react-native-dropdownalert';
import { DropDownHolder, DropDownHolderType } from './helpers/DropdownHolder';
import { APP_ENV } from './helpers/Connections';
import { injectStore } from './helpers/APIClient';

const persister = persistStore(store);
injectStore(store);
const BuckOneApp = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <SafeAreaProvider style={styles.safeArea}>
          <GestureHandlerRootView style={styles.safeArea}>
            <Router isDarkMode={isDarkMode} />
          </GestureHandlerRootView>
          <DropdownAlert
            ref={(ref: DropDownHolderType) => DropDownHolder.setDropDown(ref)}
            closeInterval={APP_ENV === "development" ? 700 : 700}
          />
          <FullScreenLoader
            ref={(ref: loaderRefType) => FullScreenLoader.setRef(ref)}
          />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default BuckOneApp;

const styles = StyleSheet.create({
  safeArea: {backgroundColor: 'white', flex: 1},
});
