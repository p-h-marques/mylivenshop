/// <reference types=cypress />

const domain = 'http://localhost:3000/'

import locators from '../support/locators'
import {url} from '../../src/utils/requests'

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