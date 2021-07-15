export const url = 'https://5d6da1df777f670014036125.mockapi.io/api/v1/product'

/**
 * Faz a requisição para a API e retorna a lista de produtos
 *
 * @returns {array} Lista de produtos
 */
export async function getProducts(){
    const handleError = (error) => {
        console.log(error)
        return new Response(JSON.stringify({
            code: 400,
            message: 'Erro!'
        }))
    }

    const request = await (fetch(url).catch(handleError))
    if(request.status !== 200) return false

    const response = await request.json()
    return response
}