import Button from '@/components/ui/button'
import Icon from '@/components/ui/icon00/Icon'
import InputText from '@/components/ui/inputText'
import StepByStep from '@/components/ui/StepByStep/StepByStep'
import React from 'react'
import styles from './Contactor.module.scss'

const Contactor = () => {
    return (
        <div className={styles.contactor}>
            <div>
                <StepByStep arraySteps={[
                    { name: 'Descripción', state: 'active' },
                    { name: 'Contratante', state: 'active' },
                    { name: 'Titular', state: 'active' },
                    { name: 'Datos del producto', state: 'current' },
                    { name: 'Cargas', state: 'disable' },
                    { name: 'Pago', state: 'disable' }
                ]} />
            </div>
            <div>
                <div>
                    <div>
                        <InputText width={168} text="Rut" type={"text"} />
                        <div>
                            <Icon color='#666666' name='emoji_people' />

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
                <Button width={200} onClick={() => { console.log('Modal Contacto') }} text='Registrar' />
            </div>
          
        </div>
    )
}

export default Contactor