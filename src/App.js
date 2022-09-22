import React from "react";
import { RecoilRoot } from "recoil";

import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App">
      <h1>Recoil Example</h1>
      <h2>Learn recoill with simple todo list app</h2>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
};

export default App;
