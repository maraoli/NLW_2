import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const PageLanding = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-text-in-primary);
    background: var(--color-primary);
`;

export const Container = styled.div`
    @media (min-width: 1100px){
        max-width: 1100px;

        display: grid;
        grid-template-rows: 350px 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas: 
        "logo hero hero"
        "buttons buttons total"
    }
`

export const LogoContainer = styled.div`
    text-align: center;
    margin-bottom: 3.2rem;

    @media (min-width: 1100px){
        grid-area: logo;
        align-self: center;
        margin: 0;
        text-align: left;
    }
`;

export const LogoTitle = styled.h2`
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;

    @media(min-width: 1100px){
        text-align: initial;
        font-size: 3.6rem;
    }
`;

export const Logo = styled.img`
    height: 10rem;

    @media(min-width: 1100px){
        height: 100%;
    }
`;

export const Hero = styled.img`
    width: 100%;
    @media (min-width: 1100px){
        grid-area: hero;
        justify-self: end;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;

    @media (min-width: 1100px){
        grid-area: buttons;
        justify-content: flex-start;
    }
`

export const ButtonLink = styled(Link)<any>`
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font: 700 2.0rem Archivo;

    &:first-child{
        margin-right: 1.6rem;
    }
    
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    &.study{
        background: var(--color-primary-lighter);
        &:hover{
            background: var(--color-primary-light);
        }
    }

    &.give-classes{
        background: var(--color-secundary);
        &:hover{
            background: var(--color-secundary-dark);
        }
    }

    @media(min-width: 1100px){
        font-size: 2.4rem;
    }
`;

export const ButtonContainerImg = styled.img`
    width: 4rem;

    @media(min-width: 1100px){
        margin-right: 2.4rem;
    }
`;

export const TotalConnections = styled.span`
    font-size: 1.8rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1100px){
        grid-area: total;
        justify-self: end;
    }
`

export const TotalConnectionsImg = styled.img`
    margin-left: 0.8rem;
`
