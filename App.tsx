import React from 'react';
import MainNavigation from "./src/navigation/navigator.tsx";
import {Provider} from "react-redux";
import {store} from "./src/store";

function App(): React.JSX.Element {
  return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
  );
}

export default App;
