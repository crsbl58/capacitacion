import { useState } from 'react'

import Screen from '@/components/layout/screen'
import Header from '@/components/ui/header'
import styles from '@/components/layout/template/template.module.scss'
import Modal from '@/components/ui/modal/Modal'
import Button from '@/components/ui/button'

const Template = ({ children }: { children: any }) => {
    const [stateModal, setStateModal] = useState(false)
    return (<Screen backgroundColor=''>
        <div className={styles.template00}>
            <Header />
            <div className={styles.template02}>{children}</div>
            {stateModal && <Modal title='Asegurado titular' text='¿Quién es el asegurado titular?'>
                <Button width={150} text="Soy yo" onClick={() => { }} />
                <Button width={150} text="Otra persona" onClick={() => { }} />
            </Modal>}
        </div>

    </Screen >

    )
}

export default Template