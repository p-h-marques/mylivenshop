import React from 'react'
import {MainStyles} from './styles'

import Header from '../../components/header'
import Footer from '../../components/footer'

const Container = (props) => {
    return (
        <>
            <Header />

            <MainStyles>
                {props.children}
            </MainStyles>

            <Footer />
        </>
    )
}

export default Container