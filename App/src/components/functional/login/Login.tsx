
import InputText from '@/components/ui/inputText'
import Link00 from '@/components/ui/link00'
import Button00 from '@/components/ui/button00'
import { Col, Container } from '@/components/layout/generic'
import styles from './Login.module.scss'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter();
    const handleClickEnter = () => {
        router.push('description')
    }
    return (
        <Container type='flex' justifyContent='center' alignItems='center'>
            <Col>
                <Col gap={5}>
                    <InputText width={260} text="Correo electrónico" type={"text"} />
                    <InputText width={260} text="Contraseña" type={"password"} />
                </Col>
                <Col gap={30} padding={[30, 0, 0, 0]} alignItems='center' >
                    <Button00 width={200} text="ingresar" onClick={() => { handleClickEnter() }} />
                    <Link00 text='Olvidé mi contraseña' />
                </Col>
            </Col>
        </Container>
    )
}

export default Login