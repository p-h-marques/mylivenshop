import React, { useReducer } from 'react'
import Context from './Context'
import reducer from './reducers'


export const initialState = {
    products: [
        {
            id: '1',
            createdAt: '2019-09-02T12:58:54.103Z',
            name: 'Rustic Metal Fish',
            price: '289.00',
            image: 'http://lorempixel.com/640/480/food',
            stock: 7
        },
        {
            id: '2',
            createdAt: '2019-09-02T07:59:58.181Z',
            name: 'Sleek Wooden Soap',
            price: '430.00',
            image: 'http://lorempixel.com/640/480/transport',
            stock: 91260
        },
        {
            id: '3',
            createdAt: '2019-09-02T22:14:05.454Z',
            name: 'Small Cotton Shoes',
            price: '993.00',
            image: 'http://lorempixel.com/640/480/sports',
            stock: 36608
        }
    ],
    cart: [
        {
            id: '1',
            quantity: 2
        }
    ],
    feedbacks: {
        loading: false,
        error: false,
        payment: false
    }
}


function Provider({ children }) {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    )

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export default Provider