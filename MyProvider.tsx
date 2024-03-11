import React, {  useState } from "react";
import { MyContext, MyContextProps } from "./MyContext.tsx";

interface MyProviderProps {
  children : React.ReactNode
}

const MyProvider : React.FC<MyProviderProps> = ({children})=>{

  const  [name,setName] =
    useState('')
  const contextValue : MyContextProps = {
    name,
    setName
  }

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
}
export default MyProvider
