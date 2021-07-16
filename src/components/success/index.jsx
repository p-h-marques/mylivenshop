import React from 'react'
import { SuccessStyles } from './styles'

import ImgPayment from '../../assets/images/payment.svg'

const Success = () => {
    return (
        <SuccessStyles data-test="success">
            <div>
                <img src={ImgPayment} alt="Compra efetuada!" />
                <p>
                    <span>Sua compra foi efetuada com sucesso.</span>
                    <span>Parabéns!</span>
                </p>
            </div>
        </SuccessStyles>
    )
}

export default Success
