import * as types from './types'

/**
 * Faz a comparação do novo produto e quantidade com o estado global
 * anterior, gera um novo estado para o carrinho
 * e retorna a action
 *
 * @param {string} id Id do produto em questão
 * @param {number} quantity Quantidade a ser atualizada no carrinho
 * @param {array} previousCart Conteúdo prévio do carrinho
 * @returns {object}
 */
export function handleCountCart(id, quantity, previousCart){
    console.log(id, quantity, previousCart)
    let newCart = [...previousCart]

    const productExistsInCart = previousCart.filter(product => product.id == id).length === 1

    if(productExistsInCart){
        newCart = previousCart.map(product => {
            if(product.id == id) return {id, quantity}

            return {...product}
        })

    } else {
        newCart.push({id, quantity})

    }

    return {
        type: types.HANDLE_COUNT_CART,
        payload: newCart
    }
}