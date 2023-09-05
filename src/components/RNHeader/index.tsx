import React from 'react';
import {
  Image,
  ImageStyle,
  Platform,
  StyleSheet,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import {moderateScale, StatusBarHeight} from '../../helpers/Responsive';
import DrawerLine from '../../assets/Icons/drawerLine.svg';
import Bell from '../../assets/Icons/bell.svg';
interface RNHeaderProps extends ViewProps {
  titleStyle?: TextStyle;
  sourceLeft?: string;
  sourceRight?: string;
  sourceBell?: string;
  style3?: ImageStyle;
  style1?: ImageStyle;
  style2?: ImageStyle;
  profileImage?: string;
  viewStyle?: ViewStyle;
  onPress?: () => void;
  onPressBell?: () => void;
  onPressWallet?: () => void;
}
const RNHeader: React.FC<RNHeaderProps> = ({
  style,
  titleStyle,
  sourceLeft,
  sourceRight,
  sourceBell,
  style3,
  style1,
  style2,
  viewStyle,
  onPress,
  onPressBell,
  onPressWallet,
  profileImage,
  ...rest
}) => {
  return (
    <View style={[styles.btnContainer, viewStyle]}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={onPress}>
          <DrawerLine width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(RNHeader);

const styles = StyleSheet.create({
  btnContainer: {
    height: moderateScale(125),
    borderColor: Colors.primaryColor,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(24),
    paddingTop: Platform.OS === 'android' ? moderateScale(20) : StatusBarHeight,
  },
  imageStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    alignSelf: 'flex-start',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  imageProfileStyle: {
    height: moderateScale(35),
    width: moderateScale(35),
    borderRadius: moderateScale(30),
    borderWidth: moderateScale(1),
    borderColor: Colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    backgroundColor: 'red',
  },
  titleStyle: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'flex-end',
  },
  menuContainer: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fullWidth: {
    minWidth: '90%',
  },
  bell: {
    marginLeft: 4,
  },
  wallet: {
    marginRight: 4,
  },
});
