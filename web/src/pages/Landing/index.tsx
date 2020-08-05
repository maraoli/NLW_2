import React from 'react';
import * as S from './styled';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing(){
    return(
        <S.PageLanding id="page-landing">
            <S.Container id="page-landing-content" className="container">
                <S.LogoContainer className="logo-container">
                    <S.Logo src={logoImg} alt="Proffy" />
                    <S.LogoTitle>Sua plataforma de estudos online.</S.LogoTitle>
                </S.LogoContainer>

                <S.Hero src={landingImg} alt="Plataforma de estudos" className="hero-image" />

                <S.ButtonContainer className="buttons-container">
                    <S.ButtonLink to="/study" className="study">
                        <S.ButtonContainerImg src={studyIcon} alt="Estudar"/>
                        Estudar
                    </S.ButtonLink>

                    <S.ButtonLink to="/give-classes" className="give-classes">
                        <S.ButtonContainerImg src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </S.ButtonLink>
                </S.ButtonContainer>

                <S.TotalConnections className="total-connections">
                    Total de 200 conexões já realizadas
                    <S.TotalConnectionsImg src={purpleHeartIcon} alt="Coração roxo"/>
                </S.TotalConnections>
            </S.Container>
        </S.PageLanding>
    )
}

export default Landing;