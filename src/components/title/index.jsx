import React, {useContext, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import {TitleStyles} from './styles'

import Context from '../../state/Context'

import ImgProduct from '../../assets/images/products.svg'
import ImgCart from '../../assets/images/cart_dark.svg'

const Title = () => {
    const {state} = useContext(Context)

    const [description, setDescription] = useState('Não há produtos cadastrados.')

    const location = useLocation()

    /**
     * Mudando descrição do cabeçalho de acordo
     * com a quantidade de produtos pesquisados e
     * conforme a página sendo exibida.
     */
    useEffect(()=>{
        if(location.pathname === '/products'){
            switch (state.products.length) {
                case 1:
                    setDescription(`Exibindo ${state.products.length} produto cadastrado.`)
                    break

                case 0:
                    setDescription('Não há produtos cadastrados.')
                    break

                default:
                    setDescription(`Exibindo ${state.products.length} produtos cadastrados.`)
                    break
            }

        } else {
            switch (state.cart.length) {
                case 1:
                    setDescription(`Exibindo ${state.cart.length} item selecionado.`)
                    break

                case 0:
                    setDescription('Não há items selecionados.')
                    break

                default:
                    setDescription(`Exibindo ${state.cart.length} itens selecionados.`)
                    break
            }
        }
    }, [state.products, state.cart, location])

    return (
        <TitleStyles data-test="title">
            <div className="icon">
                <img src={
                    location.pathname === '/products'
                        ? ImgProduct
                        : ImgCart
                } alt="Catálogo de produtos"/>
            </div>

            <div className="labels">
                <h1>{
                    location.pathname === '/products'
                        ? 'Catálogo de Produtos'
                        : 'Meu Carrinho'
                }</h1>
                <p>
                    {description}
                    {
                        state.cart.length === 0 &&
                        location.pathname === '/products' &&
                        (' Selecione algum produto para conseguir ir à tela de checkout!')
                    }
                </p>
            </div>
        </TitleStyles>
    )
}

export default Title