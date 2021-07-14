import React from 'react'
import { ProductsStyles } from './styles'

import Product from '../../components/product'

const Products = () => {
    return (
        <ProductsStyles>
            <Product
                url="http://lorempixel.com/640/480/food"
                name="Rustic Metal Fish"
                value="289.00"
                count={0}
            />
            <Product
                url="http://lorempixel.com/640/480/food"
                name="Rustic Metal Fish"
                value="289.00"
                count={0}
            />
            <Product
                url="http://lorempixel.com/640/480/food"
                name="Rustic Metal Fish"
                value="289.00"
                count={0}
            />
            <Product
                url="http://lorempixel.com/640/480/food"
                name="Rustic Metal Fish"
                value="289.00"
                count={0}
            />
            <Product
                url="http://lorempixel.com/640/480/food"
                name="Rustic Metal Fish"
                value="289.00"
                count={0}
            />
        </ProductsStyles>
    )
}

export default Products