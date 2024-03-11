import { createContext } from "react";
interface ContextProps {
  count : number,
  setCount : void
}
const TestContext =
  createContext<ContextProps | undefined>(undefined);
export default TestContext;
