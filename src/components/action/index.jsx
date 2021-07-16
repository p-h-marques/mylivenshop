import React from 'react'
import {ActionStyles} from './styles.js'

import ImgWallet from '../../assets/images/wallet.svg'
import ImgProduct from '../../assets/images/products_white.svg'

const Action = ({active, action}) => {
    return (
        <ActionStyles
            active={active}
            data-test="action-main"
            onClick={active ? action : null}
        >
            <img
                src={active ? ImgWallet : ImgProduct}
                alt="Confirmar e prosseguir com o pagamento"
            />
            <span>
                {
                    active
                        ? 'Confirmar e prosseguir com o pagamento'
                        : 'Você precisa selecionar alguns produtos antes de prosseguir.'
                }
            </span>
        </ActionStyles>
    )
}

export default Action