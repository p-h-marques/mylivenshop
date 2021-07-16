import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const HeaderStyles = styled.header`
    padding: 12px ${measures[5]};
    background-color: ${colors.main};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0px;

    div, a{
        display: flex;
        gap: ${measures[1]};
        align-items: center;
    }

    span {
        color: ${colors.background};
        font-weight: bold;
    }

    div.logo{
        img {
            height: ${measures[3]};
        }
    }

    a.cart{
        img{
            height: 20px;
        }

        span{
            display: inline-block;
            border-radius: 12px;
            font-size: 14px;
            line-height: ${measures[3]};
            background-color: ${colors.dark};
            height: ${measures[3]};
            width: ${measures[3]};
            text-align: center;
        }
    }

    @media(max-width: 575px){
        padding: 12px ${measures[3]};
    }
`