import React from 'react'
import {ActionStyles} from './styles.js'

import ImgWallet from '../../assets/images/wallet.svg'

const Action = () => {
    return (
        <ActionStyles>
            <img
                src={ImgWallet}
                alt="Confirmar e prosseguir com o pagamento"
            />
            <span>Confirmar e prosseguir com o pagamento</span>
        </ActionStyles>
    )
}

export default Action