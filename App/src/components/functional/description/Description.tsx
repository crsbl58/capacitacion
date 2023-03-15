
import { Container, Grid, Row, Col } from '@/components/layout/generic';
import Button00 from '@/components/ui/button00'
import ButtonReturn from '@/components/ui/buttonReturn';
import Link01 from '@/components/ui/link01/Link01'
import Table00 from '@/components/ui/table00'
import { useRouter } from 'next/router'
import styles from './Description.module.scss'

const Description = () => {

  const router = useRouter();

  return (
    <Container className={styles.description}
      templateColumns='repeat(4, auto)'
      templateRows='repeat(3, auto)'
      type='grid'
      justifyContent='center'
      
    >
      <Grid
        gridAutoRows='min-content'
        margin={[20, 0, 0, 0]}
        columnStart={1}
        columnEnd={4}
        rowStart={1}
        rowEnd={2}
        justifyContent='center'
      >
        <h1>Asistencia al Ciclista</h1>
        <h1>Bicicleta</h1>
      </Grid>

      <Grid
        columnStart={1}
        columnEnd={4}
        rowStart={2}
        rowEnd={3}
      >
        <Row
          justifyContent={'center'}
          margin={[27, 0, 0, 0]}
          gap={30}
        >
          <Col width={450} gap={20}>
            <p> Esta asistencia está pensada para los ciclistas tanto urbanos
              como deportivos, que por distintas razones puedan verse afectados,
              ya sea por un robo, una dolencia o algún echo que requiera revisar
              legalmente, vinculado al uso de la bicicleta.</p>
            <p>
              Asistencia disponible para el territorio nacional de Chile, incluyendo el área
              continental y la isla de Chiloé. Se excluyen los demás territorios insulares y
              antárticos.
            </p>
          </Col>
          <Col>
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
          </Col>

        </Row>
      </Grid>

      <Grid
        columnStart={1}
        columnEnd={2}
        rowStart={3}
        rowEnd={4}
      >
        <Col width={450} alignItems='center'>
          <Col>
            <Col>
              <h3>Precio normal $12.900 mensual</h3>
              <h3>Promoción $11.500 mensual</h3>
            </Col>
            <Button00 width={200} onClick={() => { router.push('contactor') }} text='Contratar' />
            <Link01 text="Quiero saber mas" />
          </Col>
        </Col>
      </Grid>
      <ButtonReturn />
    </Container>

  )
}

export default Description