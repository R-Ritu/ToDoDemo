import React, {ErrorInfo} from "react";
import {StyleSheet, Text, View} from "react-native";
import Colors from "./constants/Colors";
import FontFamily from "./constants/FontFamily";
import {moderateScale} from "./helpers/Responsive";
import {logErrorBoundary} from "./utils/Firebase/Analytics";
import {recordUICrash} from "./utils/Firebase/Crashlytics";

type MyState = {
  hasError?: boolean | false; // like this
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
  },
  text: {
    ...FontFamily.RubikRegular,
    fontSize: moderateScale(16),
    color: Colors.black,
  },
});

class ErrorBoundary extends React.Component<unknown, MyState> {
  state: MyState = {hasError: false};

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    recordUICrash(error, errorInfo);
    logErrorBoundary(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            App is Under maintenance, please try to relaunch the application.
          </Text>
        </View>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
