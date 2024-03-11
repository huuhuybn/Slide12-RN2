import {memo} from 'react'
import { Text, View } from "react-native";

// dinh nghia props
interface MemoProps {
  number : number
}

const CustomNumber : React.FC<MemoProps> =
  memo(({ number })=>{
    console.log("re-render ????")
    return <View>
    <Text style={{fontSize : 44}}> Number : {number}</Text>
  </View>})
export default CustomNumber
