import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, ViewProps
} from "react-native";

// kế thừa ViewProps :
export interface RVViewProps extends ViewProps {
  bg? : string;
  row? : boolean;
  height? : number;
  width? : number;
}
function MyView(props : RVViewProps): React.JSX.Element {
  const { bg, row, height
    , width}
    = props;
const viewStyles: {} = [
  // && nếu truyền bg trong pros thì áp dụng style phía sau
  bg && {backgroundColor : bg},
  row && { flexDirection : 'row'},
  width && {width},
  height && {height}
]
  return (
    // nạp style đã viết vào view
        <View style={[styles.container, viewStyles]}>
        {/*  noi dung cho custom view */}
        </View>
  );
}

const styles = StyleSheet.create({
  container : {
       borderColor : 'blue', borderWidth : 1, borderRadius : 10
  }
})

export default MyView;
