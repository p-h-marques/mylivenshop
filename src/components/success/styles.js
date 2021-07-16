import styled from 'styled-components'
import measures from '../../styles/measures'
import colors from '../../styles/colors'

export const SuccessStyles = styled.div`
    position: fixed;
    z-index: 9999;
    top: 0px;
    left: 0px;
    background-color: ${colors.overlay};
    width: 100%;
    min-width: 360px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        background-color: ${colors.white};
        border-radius: ${measures[1]};
        padding: ${measures[5]};
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${measures[3]};
        margin-bottom: ${measures[5]};
    }

    img {
        height: ${measures[5]};
    }

    p {
        display: flex;
        flex-direction: column;
        gap: ${measures[1]};

        span {
            line-height: ${measures[3]};
            text-align: center;
        }
    }
`