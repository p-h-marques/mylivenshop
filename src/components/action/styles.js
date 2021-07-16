import styled from 'styled-components'
import measures from '../../styles/measures'
import colors from '../../styles/colors'

export const ActionStyles = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${measures[3]};
    background-color: ${props => props.active ? colors.success : colors.dark};
    padding: ${measures[3]};
    cursor: ${props => props.active ? 'pointer' : 'default'};

    &:hover{
        background-color: ${props => props.active ? colors.successHover : colors.success};
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