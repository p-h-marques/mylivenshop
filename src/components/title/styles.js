import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const TitleStyles = styled.div`
    width: 100%;
    display: flex;
    gap: ${measures[2]};
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
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

    div.amount{
        flex-grow: 1;
        flex-basis: 0px;
        text-align: right;

        div.value{
            display: inline-block;
            justify-content: center;
            align-items: center;
            padding: ${measures[3]};
            border: 4px solid ${colors.success};
            background-color: ${colors.white};
            font-size: ${measures[3]};

            span{
                color: ${colors.success};
                font-weight: bold;
            }
        }
    }

    @media(max-width: 991px){
        div.amount div.value{
            padding: ${measures[2]};
            border: 2px solid ${colors.success};
            font-size: 20px;
        }
    }

    @media(max-width: 767px){
        flex-direction: column;
        align-items: flex-start;
    }

    @media(max-width: 575px){
        /* gap: 0px; */

        div.icon img{
            display: none;
        }
    }
`