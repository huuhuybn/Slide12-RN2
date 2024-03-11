import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, ViewProps
} from "react-native";

interface CustomViewProps {
  bg? : string,
  height? : number,
  width? : number
}
function CustomView(props : CustomViewProps): React.JSX.Element {
  const { bg , height
    , width } = props;

  const optionStyles: {} = [
    bg && {backgroundColor : bg},
    width && {width},
    height && {height}
  ]

  return (
    // nạp style đã viết vào view
    <View style={[styles.container,optionStyles]}>
      {/*  noi dung cho custom view */}
    </View>
  );
}
const styles = StyleSheet.create({
container :{
  borderWidth : 2, borderColor : 'blue',margin : 8, padding : 8
}
})
export default CustomView;
