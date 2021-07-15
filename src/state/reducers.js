import * as types from './types'

function reducer(state, action) {
    switch (action.type) {
        case types.HANDLE_COUNT_CART:
            return {
                ...state,
                cart: [
                    ...action.payload
                ]
            }

        case types.SET_PRODUCTS_LIST:
            return {
                ...state,
                products: [
                    ...action.payload
                ],
                feedbacks: {
                    ...state.feedbacks,
                    loading: false,
                    error: false
                }
            }

        default:
            throw new Error()
    }
}

export default reducer