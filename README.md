# My Liven Shop - Checkout de Produtos

Olá! Aqui é o Pedro, e esse repositório contém o desenvolvimento da demanda proposta pelo processo seletivo da [Liven!](https://liven.tech/pt), que consistia em uma lista de seleção de produtos, consumindo uma API, e uma tela de checkout, com cálculo de valores, quantidades e conclusão de pagamento simulada. Para a entrega, utilizei dos seguintes tópicos:

- **styled components** para deixar os estilos mais organizados;
- **react hooks** como o useState, useEffect e useCallback;
- **context API** para tratar as informações de cursos, filtros e exibições
- **eslint & prettier** para manter o padrão de código consistente;
- **testes funcionais com cypress** para certificar que todos os casos de uso estão perfeitos.

Se quiser visualizar o projeto em produção, ele está acessível [nesse link!](https://mylivenshop.web.app/)

## Rodando o projeto

Pra poder clonar e rodar o projeto direitinho, é só mandar aqueles comandos padrão de sempre:

```bash
npm i && npm start
```

Caso você tenha problemas com as quebras de linha do Windows, o comando abaixo corrige automaticamente os arquivos usando o Eslint:

```bash
npm run lint
```

E claro, pra executar os testes no Cypress, você pode usar esse comando:

```bash
npm run test
```

## Features

Entre features propostas de forma obrigatória & opcional pela especificação, o seguinte foi viabilizado:

- Tela de produtos consumindo lista de elementos via API, com os devidos feedbacks de carregamento e erro;
- Manipulação de quantidades e feedback visual nos produtos selecionados
- Cálculo de valor total da compra
- Edição e remoção de produtos na tela do carrinho de compras
- Testes `end to end` cobrindo todas as features, escritos utilizando o [Cypress](https://www.cypress.io);
- Componentes de cabeçalho (title) e produtos (product) reutilizáveis entre as duas telas
- Modal simulando sucesso no checkout

## Trechos de código

### Pesquisa inicial para a lista de produtos

No componente que encapsula a página de produtos, é feita a requisição no momento inicial do ciclo de vida desse componente, disparando as devidas ações de acordo com o retorno obtido.

```js
/**
 * Realiza a requisição inicial para a lista de produtos
 */
useEffect(async ()=>{
    const products = await getProducts()

    products
        ? dispatch(actions.setProductsList(products))
        : dispatch(actions.setFeedbackStatus('error', true))
}, [])
```

### Estrutura do estado global da aplicação

Para armazenar as informações da aplicação e reutilizá-las entre os componentes, utilizei o Context API, com a seguinte estrutura:

```js
export const initialState = {
    products: [],               // array com produtos
    cart: [],                   // array com produtos selecionados: [{id: string, quantity: number}]
    feedbacks: {                // status de feedbacks
        loading: true,          // - mostra feedback de carregamento
        error: false,           // - mostra feedback de erro
        payment: false          // - mostra modal simulando o pagamento
    }
}
```

### Calculando total do carrinho com reduce

No componente que exibe o valor total do carrinho, utilizei o `reduce()` para obter o valor final.

```js
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

```

### Rotas da aplicação

A aplicação possui duas rotas: `products` e `cart`, as quais estão organizadas no arquivo `routes.js` da seguinte forma:

```js
function RoutesList() {
    return (
        <Container>
            <Switch>
                <Route exact path="/products">
                    <Products />
                </Route>

                <Route exact path="/cart">
                    <Cart />
                </Route>

                <Route exact path="*">
                    <Redirect to="/products" />
                </Route>
            </Switch>
        </Container>
    )
}
```

## Trechos de testes

### Mockando requisições para testar status de erros

Dentro do Cypress, há a possibilidade de mockar e manipular as requisições feitas para simular retornos e erros, e utilizei isso para garantir que os feedbacks e informações estavam sendo exibidos adequadamente.

```js
cy.intercept(url, {
    statusCode: 500
}).as('request')
```

### Lidando com os controles de quantidade

Pra estressar os controles de quantidade dos produtos, utilizei a seguinte lógica de testes:

```js
cy.get(locators.productCard).each((el, key) => {
    cy.wrap(el).should('exist')
    cy.wrap(el).find(locators.countMinus).should('not.be.visible')
    cy.wrap(el).find(locators.countPlus).should('be.visible')


    /**
     * testando apenas um card
     */
    let a = 0

    if(key === 0){
        while (a < 5) {
            cy.wrap(el).find(locators.productCount).should('contain', a)
            cy.wrap(el).find(locators.countPlus).click()
            a += 1
        }

        while (a >= 0) {
            cy.wrap(el).find(locators.productCount).should('contain', a)
            cy.wrap(el).find(locators.countMinus).click()
            a -= 1
        }

        cy.wrap(el).find(locators.countMinus).should('not.be.visible')
    }
})
```

### Locators

Para organizar os elementos a serem buscados pelos testes, o Cypress oferece a feature dos `locators`, a qual estruturei da seguinte forma:

```js
const locators = {
    header:             'header',
    headerLogo:         'header a.logo',
    headerCart:         'header a.cart',
    headerCount:        'header a.cart span',
    title:              '[data-test=title]',
    titleMain:          '[data-test=title] div.labels h1',
    titleDescription:   '[data-test=title] div.labels p',
    titleAmount:        '[data-test=amount] div.value span',
    feedbackLoading:    '[data-test=feedback-loading]',
    feedbackError:      '[data-test=feedback-error]',
    productCard:        '[data-test=product-card]',
    productTitle:       '[data-test=product-title]',
    productValue:       '[data-test=product-value]',
    productCount:       '[data-test=product-count]',
    countMinus:         '[data-test=count-minus]',
    countPlus:          '[data-test=count-plus]',
    countZero:          '[data-test=count-zero]',
    cartLink:           '[data-test=cart-link]',
    actionMain:         '[data-test=action-main]',
    actionReturn:       '[data-test=action-return]',
    successModal:       '[data-test=success]'
}

export default locators
```