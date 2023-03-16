
import InputText from '@/components/ui/inputText'
import Link from '@/components/ui/link'
import Button from '@/components/ui/button'
import { Col, Container } from '@/components/layout/generic'
import styles from './Login.module.scss'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter();
    const handleClickEnter = () => {
        router.push('description')
    }
    return (
        <Container justifyContent='center' alignItems='center'>
            <Col>
                <Col gap={5}>
                    <InputText width={260} text="Correo electrónico" type={"text"} />
                    <InputText width={260} text="Contraseña" type={"password"} />
                </Col>
                <Col gap={30} padding={[30, 0, 0, 0]} alignItems='center' >
                    <Button width={200} text="ingresar" onClick={() => { handleClickEnter() }} />
                    <Link
                        fontFamily='Oswald'
                        fontWeight='300'
                        lineHeight={23.71}
                        color='#15495D'
                        text='Olvidé mi contraseña' />
                </Col>
            </Col>
        </Container>
    )
}

export default Login