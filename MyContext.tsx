import { createContext, useContext } from "react";

export interface MyContextProps {
  name : string,
  setName : (name: string) => void
}
// tạo 1 hàm get cho context
const getContext = () => {
  return useContext(MyContext);
}
const  MyContext =
  createContext<MyContextProps | undefined>(undefined)

export { MyContext, getContext }
