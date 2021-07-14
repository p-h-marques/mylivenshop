import React from 'react'
import {FooterStyles} from './styles'

import ImgGit from '../../assets/images/github.svg'

const Footer = () => {
    return (
        <FooterStyles>
            <a
                href="https://github.com/p-h-marques"
                target="_blank"
                rel="noreferrer"
            >
                <img src={ImgGit} alt="GitHub" />
                <span>Pedro Henrique</span>
            </a>
        </FooterStyles>
    )
}

export default Footer