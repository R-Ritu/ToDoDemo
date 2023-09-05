import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import Colors from '../../../constants/Colors';
import RNKeyboardAwareView from '../../../components/RNKeyboardAwareView';
import {moderateScale} from '../../../helpers/Responsive';
import Strings from '../../../constants/Strings';
import RNTextInput from '../../../components/RNTextInput';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../router/RouterProps';
import * as yup from 'yup';
import RNButton from '../../../components/RNButton';
import NavigationRoute from '../../../constants/navigationRoutes';
import FontFamily from '../../../constants/FontFamily';

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const passwordRef = useRef<TextInput>();
  const emailRef = useRef<TextInput>();
  const [err, setErr] = useState<{email?: ''; password?: ''}>({});
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();


  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email.')
      .required('Email is required!'),
  });

  const handleSignUpNavigation = useCallback(
    () => navigation.navigate(NavigationRoute.Login),
    [navigation],
  );


  const onEmailChange = useCallback(
    email => {
      setErr({...err, email: ''});
      setEmail(email);
    },
    [err],
  );

  //<<<<<<<<<<<<<<< Modify Data Request <<<<<<<<<<<<<<<
  const data = {
    username: email,
  };

  const handleForgot = useCallback(() => {
    try {
      schema.validateSync({email});
      navigation.navigate(NavigationRoute.Login)
    } catch (e: any) {
      setErr({...err, [e.path]: e.message});
    }
  }, [schema, data, email, err]);

  const onSubmitEdit = useCallback(() => passwordRef?.current?.focus(), []);
  return (
    <ScrollView>
      <View style={styles.containerView}>
        <FocusAwareStatusBar
          backgroundColor={Colors.white}
          translucent={true}
          barStyle={'dark-content'}
        />
        <RNKeyboardAwareView contentContainerStyle={styles.container}>
          <Text style={styles.headingText}>{Strings.ForgotPassword}</Text>
          <Text style={styles.subhHeadingText}>{Strings.Forgot_Your_pass}</Text>
          <View style={styles.inputBtnContainer}>
            <RNTextInput
              ref={emailRef}
              placeholder={Strings.email}
              style={styles.width}
              value={email}
              onChangeText={onEmailChange}
              autoCapitalize={'none'}
              error={err.email}
              returnKeyType="next"
              onSubmitEditing={onSubmitEdit}
            />
            <RNButton
              style={styles.buttonStyle}
              titleStyle={styles.titleStyle}
              title={Strings.Next}
              onPress={handleForgot}
              fullWidth={true}
            />
          </View>
          <TouchableOpacity
            style={styles.bottomContainer}
            onPress={handleSignUpNavigation}>
            <Text style={styles.alreadyText}>{Strings.New_Register_Now}</Text>
            <Text style={styles.loginText}>{Strings.Login}</Text>
          </TouchableOpacity>
        </RNKeyboardAwareView>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(50),
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
  },
  headingText: {
    top: moderateScale(20),
    width: '50%',
    fontSize: moderateScale(30),
    textAlign: 'left',
    fontFamily: FontFamily.POPINS_BOLD,
    color: Colors.headerText,
  },
  subhHeadingText: {
    top: moderateScale(15),
    fontSize: moderateScale(16),
    textAlign: 'left',
    color: Colors.headerText,
    fontFamily: FontFamily.POPINS_REGULAR,
    lineHeight: moderateScale(25.2),
    marginVertical: moderateScale(20),
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: moderateScale(40),
  },
  alreadyText: {
    top: moderateScale(15),
    fontFamily: FontFamily.POPINS_REGULAR,
    fontSize: moderateScale(14),
    textAlign: 'left',
    color: Colors.headerText,
    lineHeight: moderateScale(25.2),
    marginVertical: moderateScale(20),
  },
  loginText: {
    top: moderateScale(15),
    fontFamily: FontFamily.POPINS_BOLD,
    fontSize: moderateScale(14),
    textAlign: 'left',
    color: Colors.primaryColor,
    lineHeight: moderateScale(25.2),
    marginVertical: moderateScale(20),
  },
  buttonStyle: {
    marginTop: moderateScale(80),
    backgroundColor: Colors.primaryColor,
    borderColor: Colors.primaryColor,
  },
  titleStyle: {
    color: Colors.white,
  },
  inputBtnContainer: {
    marginVertical: moderateScale(15),
    top: moderateScale(20),
    justifyContent: 'center',
  },
});
