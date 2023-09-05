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
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../router/RouterProps';
import * as yup from 'yup';
import RNButton from '../../../components/RNButton';
import {login} from '../../../redux/action';
import NavigationRoute from '../../../constants/navigationRoutes';
import FontFamily from '../../../constants/FontFamily';
import {navigate} from '../../../router';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const passwordRef = useRef<TextInput>();
  const emailRef = useRef<TextInput>();
  const [err, setErr] = useState<{email?: ''; password?: ''}>({});
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  //<<<<<<<<<<<<<<< Email schema handles <<<<<<<<<<<<<<<
  const schema = yup.object().shape({
    password: yup.string().required('Password is Required!'),
    email: yup
      .string()
      .email('Please enter valid email.')
      .required('Email is required!'),
  });

  //<<<<<<<<<<<<<<< Handle Forgot Navigation <<<<<<<<<<<<<<<
  const handleForgotNavigation = useCallback(
    () => navigation.navigate('ForgotPassword'),
    [navigation],
  );

  //<<<<<<<<<<<<<<< Handle ON Email Change <<<<<<<<<<<<<<<
  const onEmailChange = useCallback(
    email => {
      setErr({...err, email: ''});
      setEmail(email);
    },
    [err],
  );

  //<<<<<<<<<<<<<<< Handle On Password change <<<<<<<<<<<<<<<
  const onPassChange = useCallback(
    password => {
      setErr({...err, password: ''});
      setPassword(password);
    },
    [err],
  );

  const navigationHandle = useCallback(data => {
    if (data?.statusCode === 200) {
      navigate(NavigationRoute.BottomTabStack);
    }
  }, []);

  //<<<<<<<<<<<<<<< Handle Login API call <<<<<<<<<<<<<<<

  const handleLogin = useCallback(() => {
    try {
      // schema.validateSync({password, email});
      dispatch(
        login({
          username: email,
          password,
          callBack: navigationHandle,
        }),
      );
    } catch (e: any) {
      setErr({...err, [e.path]: e.message});
    }
  }, [schema, password, email, err, navigationHandle]);

  //<<<<<<<<<<<<<<< Return Method <<<<<<<<<<<<<<<

  return (
    <ScrollView>
      <View style={styles.containerView}>
        <FocusAwareStatusBar
          backgroundColor={Colors.white}
          translucent={true}
          barStyle={'dark-content'}
        />
        <RNKeyboardAwareView contentContainerStyle={styles.container}>
          <Text style={styles.headingText}>{Strings.Lets_Sign}</Text>
          <Text style={styles.subhHeadingText}>{Strings.Welcome_back}</Text>
          <Text style={styles.subhHeadingText1}>
            {Strings.You_have_been_missed}
          </Text>
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
            />
            <RNTextInput
              ref={passwordRef}
              placeholder={Strings.password}
              labelRight={Strings.password}
              style={styles.width80}
              value={password}
              secureTextEntry={true}
              onChangeText={onPassChange}
              autoCapitalize={'none'}
              error={err.password}
              returnKeyType="done"
            />
            <View style={styles.forgotPasswordView}>
              <TouchableOpacity onPress={handleForgotNavigation}>
                <Text style={styles.forgotText}>{Strings.Forgot_Password}</Text>
              </TouchableOpacity>
            </View>
            <RNButton
              style={styles.buttonStyle}
              titleStyle={styles.titleStyle}
              title={Strings.Sign_in}
              onPress={handleLogin}
              fullWidth={true}
            />
          </View>
          <View style={styles.bottomContainer}/>
        </RNKeyboardAwareView>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(50),
  },
  container: {
    flex: 9,
    width: '100%',
    backgroundColor: Colors.white,
  },
  inputContainer: {
    alignContent: 'center',
    marginTop: moderateScale(20),
  },
  headingText: {
    top: moderateScale(20),
    width: '50%',
    fontWeight: '700',
    fontSize: moderateScale(30),
    textAlign: 'left',
    color: Colors.headerText,
    fontFamily: FontFamily.POPINS_BOLD,
  },
  subhHeadingText: {
    top: moderateScale(15),
    width: '50%',
    fontWeight: '400',
    fontSize: moderateScale(16),
    textAlign: 'left',
    color: Colors.headerText,
    lineHeight: moderateScale(25.2),
    marginTop: moderateScale(20),
    fontFamily: FontFamily.POPINS_REGULAR,
  },
  subhHeadingText1: {
    top: moderateScale(15),
    fontWeight: '400',
    fontSize: moderateScale(18),
    textAlign: 'left',
    color: Colors.headerText,
    lineHeight: moderateScale(25.2),
    marginBottom: moderateScale(20),
  },
  forgotText: {
    top: moderateScale(15),
    fontWeight: '400',
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: Colors.headerText,
    lineHeight: moderateScale(25.2),
    marginVertical: moderateScale(20),
    fontFamily: FontFamily.POPINS_REGULAR,
  },
  bottomContainer: {
    height: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(80),
  },
  buttonStyle: {
    marginTop: moderateScale(5),
    backgroundColor: Colors.primaryColor,
    borderColor: Colors.primaryColor,
  },
  titleStyle: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: moderateScale(18),
  },
  inputBtnContainer: {
    marginVertical: moderateScale(15),
    top: moderateScale(45),
    justifyContent: 'center',
  },
  forgotPasswordView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    bottom: moderateScale(20),
    marginHorizontal: moderateScale(10),
  },
  width: {width: '90%'},
  width80: {width: '80%'},
});
