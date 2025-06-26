import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import router from "./router/router";
import "./index.css";

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
