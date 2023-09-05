import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import SpinKit, {SpinnerProps} from 'react-native-spinkit';
import Colors from '../../constants/Colors';
import {moderateScale} from '../../helpers/Responsive';

export interface LoaderProps extends SpinnerProps {
  containerStyle?: ViewStyle;
  transparent?: boolean;
  loaderRef?: any;
}

const Loader: React.FC<LoaderProps> = props => {
  if (props.isVisible) {
    return (
      <View
        style={[
          styles.container,
          props.transparent ? {backgroundColor: Colors.transparent} : null,
        ]}>
        {/* <SpinKit color={Colors.primaryColor} type="Wave" size={50} {...props} />
         */}
        <ActivityIndicator color={Colors.primaryColor} size={'large'} />
        <Text style={styles.textStyle}>Loading...</Text>
      </View>
    );
  }
  return null;
};

Loader.displayName = 'loader';
export default React.memo(Loader);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 10,
    color: Colors.primaryColor,
    fontSize: moderateScale(16),
  },
});
