import styled from 'styled-components'
import measures from '../../styles/measures'
import colors from '../../styles/colors'

export const ActionStyles = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${measures[3]};
    background-color: ${colors.success};
    padding: ${measures[3]};
    cursor: pointer;

    &:hover{
        background-color: ${colors.successHover};
    }

    img {
        height: ${measures[5]};
    }

    span{
        font-weight: bold;
        color: ${colors.white};
        text-align: center;
    }
`