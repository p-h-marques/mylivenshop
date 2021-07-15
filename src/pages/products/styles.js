import styled from 'styled-components'
import measures from '../../styles/measures'
import colors from '../../styles/colors'

export const ProductsStyles = styled.div`
    div.grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: ${measures[2]};
    }

    div.feedback{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: ${measures[1]};

        &[data-test=feedback-error]{
            color: red;
        }
    }

    .link{
        position: fixed;
        bottom: 80px;
        right: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${colors.dark};
        padding: ${measures[3]};
        height: 80px;
        width: 80px;
        border-radius: 40px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);

        img {
            height: ${measures[5]};
        }
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