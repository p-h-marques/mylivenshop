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

        default:
            throw new Error()
    }
}

export default reducer