import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Colors from '../../constants/Colors';

interface RNButtonProps extends TouchableOpacityProps {
  title: string;
  titleStyle?: TextStyle;
  fullWidth?: boolean;
}
const RNButton: React.FC<RNButtonProps> = ({
  title,
  style,
  titleStyle,
  fullWidth = false,
  ...rest
}) => {
  return (
    <TouchableOpacity
      testID="RNButton-touchable"
      {...rest}
      style={[styles.btnContainer, fullWidth ? styles.fullWidth : {}, style]}>
      <Text style={[styles.titleStyle, titleStyle]} testID="RNButton-title">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(RNButton);

const styles = StyleSheet.create({
  btnContainer: {
    height: 52,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: Colors.primaryColor,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    marginBottom: 10,
    padding: 5,
    shadowColor: '#DEDEDE',
    shadowOffset: {width: -0.5, height: -0.5},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  titleStyle: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
  },
  fullWidth: {
    minWidth: '90%',
  },
});
