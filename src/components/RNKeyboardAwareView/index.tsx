import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

type RNKeyboardAwareViewProps = KeyboardAwareScrollViewProps;

const RNKeyboardAwareView: React.FC<RNKeyboardAwareViewProps> = ({
  children,
  ...props
}) => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      enableAutomaticScroll={Platform.OS === 'ios'}
      style={styles.container}
      {...props}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive">
      {children}
    </KeyboardAwareScrollView>
  );
};

export default React.memo(RNKeyboardAwareView);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
