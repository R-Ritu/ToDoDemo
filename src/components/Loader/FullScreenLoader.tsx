import React, {Component, RefObject} from "react";
import {StatusBar, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";
import {TIMEOUT} from "../../helpers/Connections";
import Loader, {LoaderProps} from "./index";

type ComponentState = {
  loading: boolean;
};

interface refProps extends ComponentState {
  startLoading: () => void;
  stopLoading: () => void;
}

export type loaderRefType = RefObject<refProps>;
class FullScreenLoader extends Component<LoaderProps, ComponentState> {
  static loaderRef: loaderRefType;
  constructor(props: LoaderProps) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  static setRef = (ref: loaderRefType) => {
    this.loaderRef = ref;
  };

  static getRef = () => {
    return this.loaderRef;
  };

  startLoading = async () => {
    //timmer is added in case user is getting hardware back and loader is still loading then it'll be auto closed after 2min in prod and 30sec in dev
    const timeout = setTimeout(() => {
      if (this.state.loading) {
        this.stopLoading();
        clearTimeout(timeout);
      }
    }, TIMEOUT);
    this.setState({loading: true});
  };

  stopLoading = () => {
    this.setState({loading: false});
  };

  render(): React.ReactNode {
    return (
      <>
        <StatusBar
          translucent
          backgroundColor={
            this.state.loading ? Colors.primaryColor : Colors.transparent
          }
        />
        <Loader isVisible={this.state.loading} />
      </>
    );
  }
}

export default FullScreenLoader;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.loaderBackground,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
