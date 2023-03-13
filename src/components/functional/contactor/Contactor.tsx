import Button00 from '@/components/ui/button00'
import Icon from '@/components/ui/icon00/Icon'
import InputText from '@/components/ui/inputText'
import Image from 'next/image'
import React from 'react'
import conversions from '../../conversions/index'
import styles from './Contactor.module.scss'

const Contactor = () => {
    return (
        <div className={styles.contactor}>
            <div></div>
            <div>
                <div>
                    <div>
                        <InputText width={168} text="Rut" type={"text"} />
                        <div>
                            <Icon color='#666666' name='emoji_people'/>
                           
                            <h3>Persona</h3>
                        </div>
                    </div>
                    <InputText width={340} text="Nombres" type={"text"} />
                    <InputText width={340} text="Apellido paterno" type={"text"} />
                    <InputText width={340} text="Apellido materno" type={"text"} />
                    <InputText width={340} text="Dirección" type={"text"} />
                    <InputText width={340} text="Comuna" type={"text"} />
                    <InputText width={340} text="Correo electrónico" type={"text"} />
                    <InputText width={340} text="Teléfono" type={"text"} />
                </div>
                <Button00 onClick={() => { console.log('Modal Contacto') }} text='Registrar' />
            </div>
        </div>
    )
}

export default Contactor