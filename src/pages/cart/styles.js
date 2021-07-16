import styled from 'styled-components'
import measures from '../../styles/measures'
import colors from '../../styles/colors'

export const CartStyles = styled.div`
    display: flex;
    justify-content: center;

    div.grid, div.actions{
        flex-grow: 1;
        flex-basis: 0px;
    }

    div.grid{
        padding-right: 7px;
        margin-right: 7px;
        border-right: 2px solid ${colors.medium};
        display: flex;
        flex-direction: column;
        gap: ${measures[2]};
    }

    a{
        display: block;
        margin-top: ${measures[2]};
        font-size: 14px;
        text-align: center;
    }

    a, a:hover, a:focus, a:active{
        color: ${colors.dark};
    }

    a:hover{
        text-decoration: underline;
    }

    @media(max-width: 991px){
        flex-direction: column;

        div.grid{
            padding-right: 0px;
            padding-bottom: 7px;
            margin-right: 0px;
            margin-bottom: 7px;
            border-right: unset;
            border-bottom: 2px solid ${colors.medium};
        }
    }
`