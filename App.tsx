import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, Suspense} from 'react';
import 'react-native-gesture-handler';
import BuckOneApp from './src';
import SplashScreen from 'react-native-splash-screen';
import Loader from './src/components/Loader';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
      <Suspense fallback={Loader}>
        <BuckOneApp />
      </Suspense>
  );
  <BuckOneApp />;
};

export default App;

const styles = StyleSheet.create({});
