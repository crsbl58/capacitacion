
import InputText from '@/components/ui/inputText'
import Link00 from '@/components/ui/link00'
import Button00 from '@/components/ui/button00'
import React from 'react'
import styles from './Login.module.scss'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter();
    console.log(router)
    return (

        <div className={styles.login}>
            <div>
                <div>
                    <InputText width={260}  text="Correo electrónico" type={"text"} />
                    <InputText width={260}  text="Contraseña" type={"password"} />

                </div>
                <div>
                    <Button00 text="ingresar" onClick={() => { router.push('/login/description') }} />
                    <Link00 text='Olvidé mi contraseña' />
                </div>
            </div>
        </div>
    )
}

export default Login