import styled from 'styled-components';
import { colors } from '../../../theme';

export const MoreButtonContainer = styled.a`
    display: flex;
    flex-direction: row;
    width: 90px;
    cursor: pointer;
    transition: transform 0.3s ease;
    text-decoration: none;

    &:hover {
        transform: scale(1.2)
    }
`

export const Arrow = styled.img`
    width: 51px;
    height: 49px;
`

export const Text = styled.span`
    color: ${colors.textPrimary};
    font-size: 20px;
    line-height: 26px;
    display: flex;
    align-items: center;
    margin-right: 19px;   
`
