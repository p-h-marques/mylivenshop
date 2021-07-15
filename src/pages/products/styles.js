import styled from 'styled-components'
import measures from '../../styles/measures'

export const ProductsStyles = styled.div`
    &.feedback{
        text-align: center;
    }

    div.grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: ${measures[2]};
    }

    @media(max-width: 1199px){
        div.grid{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media(max-width: 991px){
        div.grid{
            grid-template-columns: 1fr;
        }
    }
`