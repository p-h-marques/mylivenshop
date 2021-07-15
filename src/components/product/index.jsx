import React from 'react'
import { ProductStyles } from './styles'

import ImgMinus from '../../assets/images/minus.svg'
import ImgPlus from '../../assets/images/plus.svg'

const Product = (props) => {
    return (
        <ProductStyles data-test="product-card">
            <div className="img">
                <img src={props.url} alt="Produto" />
            </div>

            <div className="product">
                <h2 data-test="product-title">{props.name}</h2>
                <p data-test="product-value">R$ {props.value}</p>
            </div>

            <div className="infos">
                <div className={props.count > 0 ? 'counter active' : 'counter'}>
                    <img src={ImgMinus} alt="Reduzir"
                        className={props.count < 1 ? 'hide' : null}
                        onClick={props.minus}
                        data-test="count-minus"
                    />

                    <span data-test="product-count">{props.count}</span>

                    <img src={ImgPlus} alt="Aumentar"
                        className={props.count === props.stock ? 'hide' : null}
                        onClick={props.plus}
                        data-test="count-plus"
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