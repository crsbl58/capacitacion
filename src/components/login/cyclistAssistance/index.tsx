import { useState } from "react";
import "../../../style/app/login/cyclistAssistance/index.css";
function CyclistAssistance() {

  const [stateArrayTableTitle, setStateArrayTableTitle] = useState([
    "Servicio", "Monto", "Límite", "Eventos", "Carencia"
  ]);
  const [stateArrayTableData, setStateArrayTableData] = useState([
    {
      Servicio: "Bicicleta de reemplazo por robo",
      Monto: "2 UF",
      Límite: "",
      Eventos: 2,
      Carencia: "25 días"
    },
    {
      Servicio: "Telemedicina",
      Monto: "",
      Límite: "100%",
      Eventos: 2,
      Carencia: "25 días"
    },
    {
      Servicio: "Orientación médica telefónica",
      Monto: "",
      Límite: "100%",
      Eventos: 4,
      Carencia: "25 días"
    },
    {
      Servicio: "Asistencia legal",
      Monto: "",
      Límite: "100%",
      Eventos: 4,
      Carencia: "25 días"
    },
  ]);
  return (
    <div className="divContainerCyclistAssistance00">

      <div>
        <h1>Asistencia al Ciclista</h1><h1>Bicicleta</h1>
      </div>

      <div>
        <div>
          <p>Esta asistencia está pensada para los ciclistas tanto urbanos como deportivos,
            que por distintas razones puedan verse afectados, ya sea por un robo,
            una dolencia o algún echo que requiera revisar legalmente, vinculado al uso de la bicicleta.
          </p>
          <p>
            Asistencia disponible para el territorio nacional de Chile, incluyendo el área
            continental y la isla de Chiloé. Se excluyen los demás territorios insulares y antárticos.
          </p>
        </div>

        <div>
          <div>
            {stateArrayTableTitle.map((listStateArrayTableTitle) => {
              return <h2>{listStateArrayTableTitle}</h2>
            })}
          </div>
          <div>
            {stateArrayTableData.map((listStateArrayTableData) => {
              return <div>
                <h2>{listStateArrayTableData.Servicio}</h2>
                <h2>{listStateArrayTableData.Monto}</h2>
                <h2>{listStateArrayTableData.Límite}</h2>
                <h2>{listStateArrayTableData.Eventos}</h2>
                <h2>{listStateArrayTableData.Carencia}</h2>
              </div>
            })}
            </div>
        </div>
      </div>


      <div>
        <h2>
          Precio normal $12.900 mensual
        </h2>
        <h2>Promoción $11.500 mensual</h2>
        <button>
          Contratar
        </button>
        <h2>Quiero saber más</h2>
      </div>


    </div>
  );
}

export default CyclistAssistance;