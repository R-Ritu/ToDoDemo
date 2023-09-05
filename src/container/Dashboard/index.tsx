import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from '../../helpers/Responsive';
import VideoList from '../../components/VideoList';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/action';
import RNButton from '../../components/RNButton';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';
import RNHeader from '../../components/RNHeader';
import Images from '../../constants/Images';

const Dashboard = (props: any) => {
  
  useEffect(() => {
  }, []);

  const dispatch = useDispatch();

  const handleSignUpNavigation = useCallback(
    () => {
      dispatch(logout())
    },
    [],
  );

  return (
    <>
     <RNHeader
        viewStyle={styles.viewStyle}
        style3={styles.imageStyle1}
        onPress={handleSignUpNavigation}
      />
    <View style={styles.container}>
        <VideoList />
      </View>
      </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(10),
    alignItems:"center",
    justifyContent:"center",
  },
  viewStyle: {
    width: '100%',
  },
  imageStyle1: {
    height: moderateScale(25),
    width: moderateScale(25),
    alignSelf: 'center',
    resizeMode: 'contain',
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
});
