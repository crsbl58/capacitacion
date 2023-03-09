import "../../style/app/login/index.css";
import { useNavigate  } from "react-router-dom";


function Login() {
  let navegate = useNavigate(); 
  return (
    <div className="divContainerLogin00">
      <form onSubmit={(e) => {
        e.preventDefault();
        navegate("../cyclistAssistance");
      }}>
        <div>
          <label>
            <input type="text"></input>
          </label>
          <label>
            <input type="password"></input>
          </label>
        </div>
        <div>
          <button>Ingresar</button>
          <h2>Olvidé mi contraseña</h2>
        </div>
      </form>
    </div>
  );
}

export default Login;