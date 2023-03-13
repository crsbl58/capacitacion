
import Button00 from '@/components/ui/button00'
import ButtonReturn from '@/components/ui/buttonReturn';
import Link01 from '@/components/ui/link01/Link01'
import Table00 from '@/components/ui/table00'
import { useRouter } from 'next/router'
import styles from './Description.module.scss'

const Description = () => {

  const router = useRouter();

  return (
    <div className={styles.description}>

      <div>
        <h1>Asistencia al Ciclista</h1>
        <h1>Bicicleta</h1>
      </div>

      <div>

        <div>
          <p> Esta asistencia está pensada para los ciclistas tanto urbanos
            como deportivos, que por distintas razones puedan verse afectados,
            ya sea por un robo, una dolencia o algún echo que requiera revisar
            legalmente, vinculado al uso de la bicicleta.</p>
          <p>
            Asistencia disponible para el territorio nacional de Chile, incluyendo el área
            continental y la isla de Chiloé. Se excluyen los demás territorios insulares y
            antárticos.
          </p>
        </div>

        <div>
          <Table00 arrayTitle={["Servicio", "Monto", "Límite", "Eventos", "Carencia"]}
            arrayData={[
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
                Límite: "",
                Eventos: 4,
                Carencia: "25 días"
              },
            ]}></Table00>
        </div>

      </div>

      <div>

        <div>
          <h3>Precio normal $12.900 mensual</h3>
          <h3>Promoción $11.500 mensual</h3>
        </div>

        <Button00 onClick={() => { router.push('/login/contactor') }} text='Contratar' />
        <Link01 text="Quiero saber mas" />
      </div>
<ButtonReturn/>
<ButtonReturn/>
    </div>
  )
}

export default Description