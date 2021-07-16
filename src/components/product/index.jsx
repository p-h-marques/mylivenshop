import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ProductStyles } from './styles'

import { formatingValue } from '../../utils/functions'

import ImgMinus from '../../assets/images/minus.svg'
import ImgPlus from '../../assets/images/plus.svg'
import ImgRemove from '../../assets/images/remove.svg'

const Product = (props) => {
    const {pathname} = useLocation()

    const [description, setDescription] = useState(`R$ ${props.value}`)
    const [total, setTotal] = useState('')

    /**
     * Troca a descrição do produto, de acordo
     * com a página sendo visualizada
     */
    useEffect(()=>{
        if(pathname === '/cart'){
            setDescription(`R$ ${formatingValue(props.value)} x ${props.count} = `)
            setTotal(`R$ ${formatingValue(props.value * props.count)}`)

        } else {
            setDescription(`R$ ${formatingValue(props.value)}`)
            setTotal('')
        }
    }, [])

    return (
        <ProductStyles data-test="product-card">
            <div className="img">
                <img src={props.url} alt="Produto" />
            </div>

            <div className="product">
                <h2 data-test="product-title">{props.name}</h2>
                <p data-test="product-value">
                    {description}<span>{total}</span>
                </p>
            </div>

            <div className="infos">
                {
                    pathname === '/cart' && (
                        <div className="remove">
                            <img
                                src={ImgRemove}
                                alt="Remover item"
                                onClick={props.remove}
                                data-test="count-zero"
                            />
                        </div>
                    )
                }

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

                {
                    pathname === '/products' && (
                        <div className="description">
                            selecionados
                        </div>
                    )
                }
            </div>
        </ProductStyles>
    )
}

export default Product