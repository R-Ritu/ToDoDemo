/* eslint-disable react/display-name */
import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputContentSizeChangeEventData,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from '../../helpers/Responsive';

interface RNTextInputProps extends TextInputProps {
  title?: string;
  container?: ViewStyle;
  inputWrapper?: TextStyle;
  containerStyle?: ViewStyle;
  rightIcon?: React.ReactNode;
  label?: string;
  labelRight?: string;
  leftIcon?: React.ReactNode;
  error?: string;
  textArea?: boolean;
  ref?: React.Ref<TextInputProps>;
  dynamicTextAreaGrow?: (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => void;
  onLableRightPress?: () => void;
}

const RNTextInput: React.FC<RNTextInputProps> = React.forwardRef(
  (props: RNTextInputProps, _ref: React.Ref<TextInputProps>) => {
    const {
      title,
      container,
      inputWrapper,
      containerStyle,
      rightIcon,
      labelRight,
      label,
      leftIcon,
      secureTextEntry,
      error,
      style,
      maxLength,
      value,
      textArea,
      dynamicTextAreaGrow,
      onLableRightPress,
      ...rest
    } = props;
    const [showPass, setShowPass] = useState(!secureTextEntry);

    return (
      <View style={[Styles.container, container]}>
        <View
          style={[
            Styles.inputWrapper,
            inputWrapper,
            error ? Styles.errorInput : {},
            textArea ? {...Styles.textAreaContainer, ...style} : null,
          ]}>
          <View style={[Styles.containerStyle, containerStyle]}>
            <TextInput
              {...rest}
              ref={_ref}
              style={[
                Styles.inputStyle,
                textArea ? Styles.textAreaInput : null,
                style,
              ]}
              secureTextEntry={!showPass}
              placeholderTextColor={Colors.placeholder}
              underlineColorAndroid={Colors.transparent}
              maxLength={maxLength}
              value={value}
              onContentSizeChange={dynamicTextAreaGrow}
            />
          </View>
        </View>
        {error ? <Text style={Styles.errorText}>{error}</Text> : null}
        {/* {maxLength && (
          <View style={Styles.maxContainer}>
            <Text style={Styles.maxText}>{`${
              maxLength - (value?.length || 0)
            } Characters left`}</Text>
          </View>
        )} */}
      </View>
    );
  },
);

export default React.memo(RNTextInput);

const Styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(5),
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
    // backgroundColor: Colors.coolGrey,
    borderRadius: moderateScale(8),
  },
  inputStyle: {
    fontSize: moderateScale(14),
    width: '100%',
    color: Colors.black,
  },
  lableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  labelStyle: {
    paddingVertical: moderateScale(10),
    fontSize: moderateScale(14),
    fontWeight: '400',
    lineHeight: moderateScale(14),
    color: Colors.black,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    backgroundColor: 'white',
    height: moderateScale(49),
    alignItems: 'center',
    borderRadius: moderateScale(50),
    alignSelf: 'center',
    shadowColor: '#DEDEDE',
    shadowOffset: {width: -0.5, height: -0.5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  pad5: {
    padding: moderateScale(5),
  },
  genderPad5: {
    right: -moderateScale(7),
  },
  errorInput: {
    borderColor: Colors.errorRed,
    borderWidth: moderateScale(1.5),
  },
  errorText: {
    color: Colors.errorRed,
    marginTop: moderateScale(8),
    fontSize: moderateScale(12),
    textTransform: 'capitalize',
    marginHorizontal: moderateScale(10),
  },
  textAreaContainer: {
    minHeight: moderateScale(200),
  },
  textAreaInput: {
    textAlign: 'justify',
    textAlignVertical: 'top',
    width: '100%',
    minHeight: moderateScale(200),
  },
  maxContainer: {
    padding: moderateScale(5),
    margin: moderateScale(5),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  maxText: {
    fontSize: moderateScale(10),
    color: Colors.placeholder,
    textAlignVertical: 'center',
  },
});
