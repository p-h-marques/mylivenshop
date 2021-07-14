import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const MainStyles = styled.main`
    color: ${colors.dark};
    flex-grow: 1;
    flex-basis: 0px;
    margin: ${measures[5]} ${measures[5]} 80px ${measures[5]};

    @media(max-width: 575px){
        margin: ${measures[5]} ${measures[3]} 80px ${measures[3]};
    }
`