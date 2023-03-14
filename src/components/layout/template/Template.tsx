import React from 'react'
import Screen from '../screen'
import Header from '@/components/ui/header'
import styles from './template.module.scss'
import Modal00 from '@/components/ui/modal00/Modal00'
import Button00 from '@/components/ui/button00'

const Template = ({ children }: { children: any }) => {
    console.log(children);
    return (<Screen backgroundColor=''>
        <div className={styles.template00}>
            <Header />
            <div className={styles.template02}>{children}</div>
            <Modal00 title='Asegurado titular' text='¿Quién es el asegurado titular?' state={false} >
                <Button00 width={150} text="Soy yo" onClick={() => { }} />
                <Button00 width={150} text="Otra persona" onClick={() => { }} />
            </Modal00>
        </div>

    </Screen >

    )
}

export default Template