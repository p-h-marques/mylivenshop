import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const TitleStyles = styled.div`
    width: 100%;
    display: flex;
    gap: ${measures[2]};
    align-items: center;
    justify-content: flex-start;
    padding-bottom: ${measures[3]};
    margin-top: ${measures[6]};
    margin-bottom: ${measures[5]};
    border-bottom: 2px solid ${colors.light};

    div.icon img{
        height: 80px;
    }

    div.labels {
        display: flex;
        flex-direction: column;
        gap: ${measures[2]};

        h1{
            font-size: ${measures[3]};
            font-weight: bold;
        }

        p{
            font-size: 14px;
        }
    }

    @media(max-width: 575px){
        gap: 0px;
        div.icon img{
            display: none;
        }
    }
`