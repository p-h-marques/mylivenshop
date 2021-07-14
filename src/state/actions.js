import * as types from './types'

/**
 * Action para update simples
 *
 * @param {boolean} data
 * @returns
 */
export function simpleUpdate(data){
    return {
        type: types.SIMPLE_UPDATE,
        payload: data,
    }
}