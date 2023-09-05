import {Alert} from "react-native";

const AlertApp = (
  message: string,
  onSuccess?: () => void,
  onDismiss?: () => void
) => {
  const buttons = [
    {text: "Yes", onPress: onSuccess},
    {text: "No", onPress: onDismiss},
  ];
  return Alert.alert("Hey Mumma!", message, buttons);
};

export default AlertApp;
