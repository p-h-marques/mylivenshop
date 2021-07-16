import React, {useContext} from 'react'
import {MainStyles} from './styles'

import Header from '../../components/header'
import Title from '../../components/title'
import Footer from '../../components/footer'
import Success from '../../components/success'

import Context from '../../state/Context'

const Container = (props) => {
    const {state} = useContext(Context)
    return (
        <>
            <Header />

            <MainStyles>
                <Title />
                {props.children}
            </MainStyles>

            <Footer />

            {
                state.feedbacks.payment && (
                    <Success />
                )
            }
        </>
    )
}

export default Container