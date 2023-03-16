
import { Container, Grid, Row, Col, ContainerGrid } from '@/components/layout/generic';
import Button from '@/components/ui/button'
import ButtonReturn from '@/components/ui/buttonReturn';
import Link from '@/components/ui/link/Link'
import Table from '@/components/ui/table'
import { useRouter } from 'next/router'
import styles from './Description.module.scss'

const Description = () => {

  const router = useRouter();

  return (
    <Container className={styles.description}
    >
      <ContainerGrid
        templateColumns='repeat(4, auto)'
        templateRows='repeat(4, auto)'
        justifyContent='center'
      >
        <Grid /* gridArea/ rowStart ,columnStart ,rowEnd={4} ,columnEnd */
          gridArea={[1, 1, 2, 4]}
          justifyContent='center'
          alignItems='center'
        >
          <Col margin={[20, 0, 0, 0]}>
            <h1>Asistencia al Ciclista</h1>
            <h1>Bicicleta</h1>
          </Col>
        </Grid>

        <Grid /* gridArea/ rowStart ,columnStart ,rowEnd={4} ,columnEnd */
          gridArea={[2, 1, 3, 4]}
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
              <Table arrayTitle={["Servicio", "Monto", "Límite", "Eventos", "Carencia"]}
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
                ]}/>
            </Col>

          </Row>
        </Grid>

        <Grid /* gridArea/ rowStart ,columnStart ,rowEnd={4} ,columnEnd */
          gridArea={[3, 1, 4, 2]}
        >
          <Col gap={20} margin={[42, 0, 0, 0]} width={450} alignItems='center'>
            <Col>
              <h3>Precio normal $12.900 mensual</h3>
              <h3>Promoción $11.500 mensual</h3>
            </Col>
            <Button width={200} onClick={() => { router.push('contactor') }} text='Contratar' />
            <Link
                        fontFamily='Quicksand'
                        fontWeight='600'
                        lineHeight={20}
                        color='#0500FF'
                        text="Quiero saber mas" />
          </Col>
        </Grid>

      </ContainerGrid>
      <ButtonReturn />
    </Container>

  )
}

export default Description