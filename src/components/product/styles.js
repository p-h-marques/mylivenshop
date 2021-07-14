import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const ProductStyles = styled.div`
    padding: ${measures[3]} ${measures[1]} ${measures[3]} ${measures[3]};
    background-color: ${colors.white};
    display: flex;
    gap: ${measures[3]};
    align-items: center;

    div.img, div.img img{
        height: 80px;
        width: 100px;
    }

    div.product{
        display: flex;
        flex-direction: column;
        gap: ${measures[1]};
        flex-grow: 1;
        flex-basis: 0px;

        h2{
            font-size: ${measures[2]};
            font-weight: bold;
            color: ${colors.dark};
        }

        p{
            font-size: 14px;
            color: ${colors.gray};
        }
    }

    div.infos{
        display: flex;
        flex-direction: column;
        gap: ${measures[1]};
        align-items: center;
        justify-content: center;

        div.counter{
            display: flex;
            align-items: center;
            justify-content: center;
            height: ${measures[4]};
            border-radius: ${measures[2]};
            background-color: ${colors.background};
            padding: 4px;
            gap: ${measures[2]};

            img{
                height: ${measures[3]};
                cursor: pointer;

                &.hide{
                    visibility: hidden;
                }
            }

            span {
                color: ${colors.success};
                font-weight: bold;
            }
        }

        div.description{
            font-size: 12px;
            color: ${colors.gray};
        }
    }

    @media(max-width: 1399px){
        gap: ${measures[2]};
    }

    @media(max-width: 575px){
        gap: ${measures[1]};

        div.img, div.img img{
            height: 56px;
            width: 75px;
        }

        div.infos div.counter{
            gap: ${measures[1]};
        }

        div.infos div.description{
            display: none;
        }
    }
`