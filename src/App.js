import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "./router/renderRoute";
import routerConfig from "./router/constant";
import { Suspense } from "react";
function App(props) {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        {/* <Route path="/" component={Home} /> */}
        {renderRoutes(routerConfig)}
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
