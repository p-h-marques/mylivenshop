import React, { useCallback, useContext, useEffect } from 'react'
import { ProductsStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'

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

    useEffect(()=>{
        // console.log(state.cart)
    }, [state.cart])

    return (
        <ProductsStyles>
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
        </ProductsStyles>
    )
}

export default Products