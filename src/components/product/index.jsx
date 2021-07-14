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
                    <img src={ImgMinus} alt="Reduzir"
                        className={props.count < 1 ? 'hide' : null}
                        onClick={props.minus}
                    />

                    <span>{props.count}</span>

                    <img src={ImgPlus} alt="Aumentar"
                        className={props.count === props.stock ? 'hide' : null}
                        onClick={props.plus}
                    />
                </div>
                <div className="description">
                    selecionados
                </div>
            </div>
        </ProductStyles>
    )
}

export default Product