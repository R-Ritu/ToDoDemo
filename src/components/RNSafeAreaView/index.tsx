import React, {ReactNode} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import Colors from "../../constants/Colors";
import {moderateScale} from "../../helpers/Responsive";
import FocusAwareStatusBar from "../FocusAwareStatusBar";

interface SafeAreaViewComponentProps {
  safeAreaStyle?: ViewStyle;
  children: ReactNode;
}

const RNSafeAreaView: React.FC<SafeAreaViewComponentProps> = props => {
  const {children, safeAreaStyle} = props;
  return (
    <View style={[styles.container, safeAreaStyle]}>
      <FocusAwareStatusBar
        backgroundColor={Colors.backgroundColor}
        translucent={true}
        barStyle={"dark-content"}
      />
      {children}
    </View>
  );
};

export default React.memo(RNSafeAreaView);
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    paddingHorizontal: moderateScale(15),
    paddingTop: moderateScale(10),
  },
});
