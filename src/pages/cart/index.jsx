import React, {useCallback, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {CartStyles} from './styles.js'

import Context from '../../state/Context'
import { getCartCountProduct, changeCartProductCount } from '../../utils/functions.js'

import Product from '../../components/product'
import Action from '../../components/action'

const Cart = () => {
    const {state, dispatch} = useContext(Context)

    useEffect(()=>{
        // console.log(state.cart)
    }, [state.cart])

    /**
     * Insere a nova quantidade de produtos do carrinho
     * no objeto de estado global, e atualiza caso
     * o produto já esteja por lá
     */
    const handleChangeCartProductCount = useCallback((id, count, max)=>{
        changeCartProductCount(dispatch, id, count, max, state.cart)
    }, [state.cart])

    return (
        <CartStyles>
            <div
                className="grid"
                style={state.cart.length === 0 ? {display:'none'} : null}
            >
                {
                    state.cart.map(product => {
                        const productInCart = state.products.filter(
                            prod => prod.id === product.id
                        )[0]

                        return(
                            <Product
                                key={productInCart.id}
                                url={productInCart.image}
                                name={productInCart.name}
                                value={productInCart.price}
                                stock={productInCart.stock}
                                count={getCartCountProduct(state.cart, productInCart.id)}
                                minus={()=>{
                                    handleChangeCartProductCount(
                                        productInCart.id,
                                        getCartCountProduct(state.cart, productInCart.id) - 1,
                                        productInCart.stock
                                    )
                                }}
                                plus={()=>{
                                    handleChangeCartProductCount(
                                        productInCart.id,
                                        getCartCountProduct(state.cart, productInCart.id) + 1,
                                        productInCart.stock
                                    )
                                }}
                                remove={()=>{
                                    handleChangeCartProductCount(
                                        productInCart.id,
                                        0,
                                        productInCart.stock
                                    )
                                }}
                            />
                        )
                    })
                }
            </div>
            <div className="actions">
                <Action active={state.cart.length !== 0}/>

                <Link to="/products">
                    Retornar à lista de produtos
                </Link>
            </div>
        </CartStyles>
    )
}

export default Cart