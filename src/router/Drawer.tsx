import React from 'react';
import {StyleSheet, Image, View} from 'react-native';


const Drawer = (props: any) => {
  return (
    <View style={styles.container}/>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width:  "100%"
  },
});
