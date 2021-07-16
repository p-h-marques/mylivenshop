import * as actions from '../state/actions'

/**
 * Obtém a quantidade de items do carrinho
 * de determinado produto
 *
 * @param {array} cart Elementos do carrinho
 * @param {number} prodId ID do produto a ser pesquisado
 * @returns {number} Quantidade de itens no carrinho
 */
export function getCartCountProduct(cart, prodId){
    const searchProduct = cart.filter(prodInCart =>{
        return prodInCart.id === prodId
    })

    const count = searchProduct.length === 0
        ? 0
        : searchProduct[0].quantity

    return count
}

/**
 * Edita a quantidade de produtos do carrinho
 *
 * @param {function} dispatch Dispatch, proveniente do useContext
 * @param {string} id Id do produto a ser manipulado
 * @param {number} count Quantidade a ser atualizada no carrinho
 * @param {number} max Quantidade máxima dos produtos
 * @param {array} cart Conteúdo prévio do carrinho
 * @returns {false | void}
 */
export function changeCartProductCount(dispatch, id, count, max, cart){
    if(count < 0 || count > max) return false
    dispatch(actions.handleCountCart(id, count, cart))
}

/**
 * Transforma 9999.99 em 9.999,99
 *
 * @param {string | number} enter Número a ser formatado
 * @returns {string} Valor monetário
 */
export function formatingValue(enter) {
    let value = parseFloat(enter)

    if (isNaN(value)) {
        value = 0
    }

    let newvalue = value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    return newvalue
}

/**
 * Calcula o valor total do carrinho, multiplicando
 * o valor dos produtos pelas suas quantidades
 *
 * @param {array} cart Produtos selecionados no carrinho
 * @param {array} products Lista de produtos provenientes da API
 * @returns {number} Valor total dos produtos e quantidades do carrinho
 */
export function getAmount(cart, products){
    if(cart.length === 0) return 0

    return cart.reduce((acc, cur) => {
        return acc + (
            parseFloat(
                products.filter(product => product.id == cur.id)[0].price
            ) * cur.quantity
        )
    }, 0)
}