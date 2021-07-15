import React, {useContext, useEffect, useState} from 'react'
import {TitleStyles} from './styles'

import Context from '../../state/Context'

import ImgProduct from '../../assets/images/products.svg'

const Title = () => {
    const {state} = useContext(Context)

    const [description, setDescription] = useState('Não há produtos cadastrados.')

    useEffect(()=>{
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
    }, [state.products])

    return (
        <TitleStyles data-test="title">
            <div className="icon">
                <img src={ImgProduct} alt="Catálogo de produtos"/>
            </div>

            <div className="labels">
                <h1>Catálogo de Produtos</h1>
                <p>
                    {description}
                    {state.cart.length === 0 && (' Selecione algum produto para conseguir ir à tela de checkout!')}
                </p>
            </div>
        </TitleStyles>
    )
}

export default Title