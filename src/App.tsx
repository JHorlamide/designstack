import React from "react";
import { Toaster } from "react-hot-toast";
import RoutesConfig from "./routes/RoutesConfig";

const App = () => {
  return (
    <React.Fragment>
      <Toaster toastOptions={{ duration: 5000 }} />
      <RoutesConfig />
    </React.Fragment>
  );
};

export default App;
