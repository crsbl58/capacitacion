import { Routes, Route } from "react-router-dom";

import App from "./App";
import Login from "./components/login/index"
import CyclistAssistance from "./components/login/cyclistAssistance/index"

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="login" element={<Login />} ></Route>
      <Route path="cyclistAssistance" element={<CyclistAssistance />} ></Route>
    </Route>
    <Route path="*" element={<div>no found</div>} />
  </Routes>
);

export default RoutesApp;