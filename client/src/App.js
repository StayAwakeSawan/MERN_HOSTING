import { Toaster } from "react-hot-toast";
import Router from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>

      <Toaster position="top-center" />
    </>
  );
}

export default App;
