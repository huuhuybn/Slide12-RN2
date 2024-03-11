import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyView from "./MyView.tsx";
import CustomHeader from "./CustomHeader.tsx";
import CustomView from "./CustomView.tsx";
import CustomNumber from "./CustomNumber.tsx";
import MyProvider from "./MyProvider.tsx";
import { getContext } from "./MyContext.tsx";


const Content = ()=>{
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // useMemo , memo (Memory)
  // useCallback
  // useContext :
  // chia sẻ thông tin trên toàn bộ dự án RN

  const [number, setNumber] =
    useState(0);
  const [number2, setNumber2] =
    useState(0);

  const inscreaseNumber2 = useCallback(()=>{
    setNumber2(number2 + 1)
  },[number2])

  const tinhBinhPhuongNumber = useMemo(()=>{
    return number * number
  }, [number])

  //const {name,setName} = getContext();
  return  <SafeAreaView style={{ flex : 1}}>
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
    <View style={{flex : 1, backgroundColor : 'white'}}>
      <Text style={{fontSize : 44}}> Number 2 : {number2}</Text>
      {/*custom component hien thi number !!!*/}
      <Text> {tinhBinhPhuongNumber}</Text>
      <CustomNumber number={number}/>
      <Button title={"Update Number2"} onPress={inscreaseNumber2}/>
      <Button title={"Update Number"} onPress={()=>{
        //number2 = number2 + 1
        setNumber(number + 1);
      }}/>
    </View>

  </SafeAreaView>
}
function App(): React.JSX.Element {
  return (
    <MyProvider>
      <View style={{ flex : 1, backgroundColor : 'black'}}>
        <Content/>
      </View>
    </MyProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
