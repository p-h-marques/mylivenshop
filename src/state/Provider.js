import React, { useReducer } from 'react'
import Context from './Context'
import reducer from './reducers'


export const initialState = {
    products: [],
    cart: [],
    feedbacks: {
        loading: true,
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