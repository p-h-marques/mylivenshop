import React, {useContext} from 'react'
import {HeaderStyles} from './styles'

import Context from '../../state/Context'

import ImgLogo from '../../assets/images/logo.svg'
import ImgCart from '../../assets/images/cart_white.svg'

const Header = () => {
    const {state} = useContext(Context)

    return (
        <HeaderStyles>
            <div className="logo">
                <img src={ImgLogo} alt="My Liven Shop" />
                <span>My Liven Shop!</span>
            </div>

            <div className="cart">
                <img src={ImgCart} alt="Meu carrinho" />
                <span>{state.cart.length}</span>
            </div>
        </HeaderStyles>
    )
}

export default Header