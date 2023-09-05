import {useIsFocused} from "@react-navigation/native";
import * as React from "react";
import {StatusBar, StatusBarProps} from "react-native";

type FocusAwareStatusBarProps = StatusBarProps;

const FocusAwareStatusBar: React.FC<FocusAwareStatusBarProps> = props => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
};

export default React.memo(FocusAwareStatusBar);
