import React from "react";
//import "./App.css";
import CustermoInput from "./compoments/customerInput/CustermoInput";
import config from "./config/config";
// import Success from "./compoments/Success";
import Welcome from "./compoments/welcome/Welcome";
import Failed from "./compoments/failed/Failed";
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
        Compoment = Welcome;
        break;
      case config.pages.input:
        Compoment = CustermoInput;
        break;
      case config.pages.welcome:
        Compoment = Welcome;
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
            {/* <Provider store={store}> */}
            <Compoment></Compoment>
            {/* </Provider> */}
          </PageRouterContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
