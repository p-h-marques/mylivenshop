import React, { useCallback, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductsStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'
import {getProducts} from '../../utils/requests'
import {getCartCountProduct, changeCartProductCount} from '../../utils/functions'

import Product from '../../components/product'

import ImgCart from '../../assets/images/cart_white.svg'

const Products = () => {
    const {state, dispatch} = useContext(Context)

    /**
     * Pesquisando se id do produto já existe no carrinho, e obtendo
     * sua quantidade de elementos
     */
    const getCartCountProductCallback = useCallback(productId =>{
        return getCartCountProduct(state.cart, productId)
    }, [state.cart])

    /**
     * Insere a nova quantidade de produtos do carrinho
     * no objeto de estado global, e atualiza caso
     * o produto já esteja por lá
     */
    const handleChangeCartProductCount = useCallback((id, count, max)=>{
        changeCartProductCount(dispatch, id, count, max, state.cart)
    }, [state.cart])

    /**
     * Realiza a requisição inicial para a lista de produtos
     */
    useEffect(async ()=>{
        const products = await getProducts()

        products
            ? dispatch(actions.setProductsList(products))
            : dispatch(actions.setFeedbackStatus('error', true))
    }, [])

    return (
        <ProductsStyles>
            <div className="grid">
                {state.products.map(product=>(
                    <Product
                        key={product.id}
                        url={product.image}
                        name={product.name}
                        value={product.price}
                        stock={product.stock}
                        count={getCartCountProductCallback(product.id)}
                        minus={()=>{
                            handleChangeCartProductCount(
                                product.id,
                                getCartCountProductCallback(product.id) - 1,
                                product.stock
                            )
                        }}
                        plus={()=>{
                            handleChangeCartProductCount(
                                product.id,
                                getCartCountProductCallback(product.id) + 1,
                                product.stock
                            )
                        }}
                    />
                ))}
            </div>

            {
                state.feedbacks.loading && !state.feedbacks.error && (
                    <div className="feedback" data-test="feedback-loading">
                        Carregando...
                    </div>
                )
            }

            {
                state.feedbacks.error && (
                    <div className="feedback" data-test="feedback-error">
                        <p>Ocorreu um erro ao carregar a lista de produtos.</p>
                        <p>Por favor, tente novamente mais tarde!</p>
                    </div>
                )
            }

            {
                state.cart.length > 0 && (
                    <Link className="link" to="/cart" data-test="cart-link">
                        <img src={ImgCart} alt="Ir ao carrinho" />
                    </Link>
                )
            }
        </ProductsStyles>

    )
}

export default Products