import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const FooterStyles = styled.footer`
    background-color: ${colors.dark};
    color: ${colors.white};
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        display: flex;
        gap: ${measures[1]};
        align-items: center;
    }

    img{
        height: 20px;
    }

    span{
        font-size: 14px;
        font-weight: bold;
        color: ${colors.white};

        &:hover{
            text-decoration: underline;
        }
    }
`