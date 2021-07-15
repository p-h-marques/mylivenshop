import React, { useCallback, useContext, useEffect } from 'react'
import { ProductsStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'
import {getProducts} from '../../utils/requests'

import Product from '../../components/product'

const Products = () => {
    const {state, dispatch} = useContext(Context)

    /**
     * Pesquisando se id do produto já existe no carrinho, e obtendo
     * sua quantidade de elementos
     */
    const getCartCountProduct = useCallback(productId =>{
        const searchProduct = state.cart.filter(productInCart =>{
            return productInCart.id === productId
        })

        const count = searchProduct.length === 0
            ? 0
            : searchProduct[0].quantity

        return count
    }, [state.cart])

    /**
     * Insere a nova quantidade de produtos do carrinho
     * no objeto de estado global, e atualiza caso
     * o produto já esteja por lá
     */
    const handleChangeCartProductCount = useCallback((id, count, max)=>{
        if(count < 0 || count > max) return false
        dispatch(actions.handleCountCart(id, count, state.cart))
    }, [state.cart])

    /**
     * Realiza a requisição inicial para a lista de produtos
     */
    useEffect(async ()=>{
        const products = await getProducts()

        products
            ? dispatch(actions.setProductsList(products))
            : null
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
                        count={getCartCountProduct(product.id)}
                        minus={()=>{
                            handleChangeCartProductCount(
                                product.id,
                                getCartCountProduct(product.id) - 1,
                                product.stock
                            )
                        }}
                        plus={()=>{
                            handleChangeCartProductCount(
                                product.id,
                                getCartCountProduct(product.id) + 1,
                                product.stock
                            )
                        }}
                    />
                ))}
            </div>

            {
                state.feedbacks.loading && (
                    <div className="feedback">Carregando...</div>
                )
            }

            {
                state.feedbacks.error && (
                    <div className="feedback">Erro!</div>
                )
            }
        </ProductsStyles>

    )
}

export default Products