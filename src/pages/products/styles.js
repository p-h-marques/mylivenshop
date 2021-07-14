import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const ProductsStyles = styled.div`
    color: ${colors.light};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${measures[2]};

    @media(max-width: 1199px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 991px){
        grid-template-columns: 1fr;
    }
`