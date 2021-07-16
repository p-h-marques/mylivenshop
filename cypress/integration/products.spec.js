/// <reference types=cypress />

const domain = 'http://localhost:3000/'

import locators from '../support/locators'
import {url} from '../../src/utils/requests'
import {formatingValue} from '../../src/utils/functions'

describe('testando features do header', ()=>{
    beforeEach(()=>{
        cy.visit(domain)
    })

    it('header e seus elementos existem', ()=>{
        cy.get(locators.header).should('exist')
        cy.get(locators.headerLogo).should('exist')
        cy.get(locators.headerCart).should('exist')
        cy.get(locators.headerCount).should('exist')
        cy.get(locators.headerCount).should('contain', '0')
    })

    it.skip('carrinho do header só aparece na rota de products', ()=>{

    })
})

describe('testando features do title', ()=>{
    it('título da página e contagem estão corretos no catálogo de produtos', ()=>{
        cy.visit(domain)
        cy.get(locators.title).should('exist')
        cy.get(locators.titleMain).should('exist')
        cy.get(locators.titleMain).should('contain', 'Catálogo de Produtos')
        cy.get(locators.titleDescription).should('exist')
        cy.get(locators.titleDescription).should('contain', 'Exibindo 50 produtos cadastrados.')
    })

    it('requisição sem produtos mostra o title apropriado', ()=>{
        cy.intercept(url, {
            body: []
        }).as('request')

        cy.visit(domain)
        cy.wait('@request')

        cy.get(locators.title).should('exist')
        cy.get(locators.titleDescription).should('contain', 'Não há produtos cadastrados.')
    })

    it('requisição com apenas um produto mostra descrição do title no singular', ()=>{
        cy.intercept(url, {
            body: [{
                id: '1',
                createdAt: '2019-09-02T12:58:54.103Z',
                name: 'Rustic Metal Fish',
                price: '289.00',
                image: 'http://lorempixel.com/640/480/food',
                stock: 65171
            }]
        }).as('request')

        cy.visit(domain)
        cy.wait('@request')

        cy.get(locators.title).should('exist')
        cy.get(locators.titleDescription).should('contain', 'Exibindo 1 produto cadastrado.')
    })
})

describe('testando lista de produtos', ()=>{
    it('feedback inicial de carregamento existe', ()=>{
        cy.visit(domain)
        cy.get(locators.feedbackLoading).should('exist').should('contain', 'Carregando...')
    })

    it('feedback de erro de requisição existe', ()=>{
        cy.intercept(url, {
            statusCode: 500
        }).as('request')

        cy.visit(domain)
        cy.wait('@request')

        cy.get(locators.feedbackError).should('exist')
        cy.get(locators.feedbackError).should('contain', 'Ocorreu um erro ao carregar a lista de produtos.')
        cy.get(locators.feedbackError).should('contain', 'Por favor, tente novamente mais tarde!')
    })

    it('quantidade de produtos e suas informações correspondem com a API', ()=>{
        cy.visit(domain)

        cy.request(url).then(response => {
            cy.get(locators.productCard).should('have.length', response.body.length)

            cy.get(locators.productCard).each((el, key) => {
                cy.wrap(el).should('exist')
                cy.wrap(el).find(locators.productTitle)
                    .should('contain', response.body[key].name)

                cy.wrap(el).find(locators.productValue)
                    .should('contain', 'R$ ' + formatingValue(response.body[key].price))

                cy.wrap(el).find(locators.productCount)
                    .should('contain', 0)

            })
        })
    })

    it('aumento e diminuição das quantidades dos produtos nos cards funcionam corretamente', ()=>{
        cy.visit(domain)

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
    })

    it('quantidade de produtos selecionados é exibida corretamente no header', ()=>{
        cy.visit(domain)

        cy.get(locators.productCard).each((el, key) => {
            if(key < 5){
                cy.wrap(el).should('exist')
                cy.wrap(el).find(locators.countMinus).should('not.be.visible')
                cy.wrap(el).find(locators.countPlus).should('be.visible')
                cy.wrap(el).find(locators.countPlus).click()
                cy.get(locators.headerCount).should('contain', key + 1)
            }
        })
    })
})