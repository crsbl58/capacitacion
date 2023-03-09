import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './style/app/index.css';
import logo1 from './img/logo 1.png'

function App() {
  let navegate = useNavigate();
  useEffect(() => {
    navegate("login");
  }, []);
  return (
    <div className="App">
      <header>
        <div><img src={logo1}></img></div>
        <div><h2>Cliente</h2></div>
      </header>
      <main>{<Outlet />}</main>
    </div>
  );
}

export default App;
