import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustermoInput from "./compoments/CustermoInput";
import Printer from "./compoments/Printer";
import config from "./config/config";
import XPrinter from "./compoments/XPrinter";
import Success from "./compoments/Success";
import Welcome from "./compoments/Welcome";
import Failed from "./compoments/Failed";
import { useState } from "react";
const pageRouter = {
  changeRoute: () => {},
};
export const PageRouterContext = React.createContext(pageRouter);

function App() {
  const [target, setTaget] = useState({ id: "", data: {} });
  const changeRoute = (route) => {
    setTaget((target) => ({
      ...route,
    }));
  };

  let Compoment = null;
  const setPage = () => {
    console.log(target);
    switch (target.id) {
      case config.pages.home:
        Compoment = CustermoInput;
        break;
      case config.pages.printList:
        Compoment = Printer;
        break;
      case config.pages.input:
        Compoment = CustermoInput;
        break;
      case config.pages.welcome:
        Compoment = Welcome;
        break;
      case config.pages.success:
        Compoment = Success;
        break;
      case config.pages.failed:
        Compoment = Failed;
        break;
      default:
        Compoment = Welcome;
        break;
    }
  };

  setPage();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <PageRouterContext.Provider value={changeRoute}>
            <Compoment></Compoment>
          </PageRouterContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
