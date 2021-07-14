import React, { useContext, useEffect } from 'react'
import { StartStyles } from './styles'

import Context from '../../state/Context'

const Start = () => {
    const { state } = useContext(Context)

    useEffect(() => {
        console.log(state)
    }, [state])

    return <StartStyles>Diga olá para o template!</StartStyles>
}

export default Start
