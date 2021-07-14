import React from 'react'
import { ProductStyles } from './styles'

import ImgMinus from '../../assets/images/minus.svg'
import ImgPlus from '../../assets/images/plus.svg'

const Product = (props) => {
    return (
        <ProductStyles>
            <div className="img">
                <img src={props.url} alt="Produto" />
            </div>

            <div className="product">
                <h2>{props.name}</h2>
                <p>R$ {props.value}</p>
            </div>

            <div className="infos">
                <div className="counter">
                    <img src={ImgMinus} alt="Reduzir" />
                    <span>{props.count}</span>
                    <img src={ImgPlus} alt="Aumentar" />
                </div>
                <div className="description">
                    selecionados
                </div>
            </div>
        </ProductStyles>
    )
}

export default Product