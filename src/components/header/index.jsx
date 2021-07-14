import React from 'react'
import {HeaderStyles} from './styles'

import ImgLogo from '../../assets/images/logo.svg'
import ImgCart from '../../assets/images/cart_white.svg'

const Header = () => {
    return (
        <HeaderStyles>
            <div className="logo">
                <img src={ImgLogo} alt="My Liven Shop" />
                <span>My Liven Shop!</span>
            </div>

            <div className="cart">
                <img src={ImgCart} alt="Meu carrinho" />
                <span>3</span>
            </div>
        </HeaderStyles>
    )
}

export default Header