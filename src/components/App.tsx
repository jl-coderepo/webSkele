import * as React from "react";
import HeaderTest from "./HeaderTest";

interface HelloWorldProps {
  statement?: string;
}
const App = (props: HelloWorldProps) => {
  return <HeaderTest statement={props.statement} />;
};

export default App;
