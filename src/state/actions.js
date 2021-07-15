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
    let newCart = [...previousCart]

    const productExistsInCart = previousCart.filter(product => product.id == id).length === 1

    if(productExistsInCart){
        if(quantity === 0){
            newCart.forEach((product, index) => {
                if(product.id == id) {
                    newCart.splice(index, 1)
                }
            })

        } else {
            newCart = previousCart.map(product => {
                if(product.id == id) return {id, quantity}

                return {...product}
            })

        }

    } else {
        newCart.push({id, quantity})

    }

    return {
        type: types.HANDLE_COUNT_CART,
        payload: newCart
    }
}

/**
 * Insere lista de pedidos obtida via API
 * no estado global da aplicação
 *
 * @param {array} products Produtos obtidos via API
 * @returns {object}
 */
export function setProductsList(products){
    return {
        type: types.SET_PRODUCTS_LIST,
        payload: products
    }
}

/**
 * Atualiza parâmetros de feedback do estado global da aplicação
 *
 * @param {string} type Chave de feedback a ser alterada
 * @param {boolean} status Estado do feedback
 * @returns {object}
 */
export function setFeedbackStatus(type, status){
    return {
        type: types.SET_FEEDBACK_STATUS,
        payload: {
            [type]: status
        }
    }
}