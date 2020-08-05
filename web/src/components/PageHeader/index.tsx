import React from 'react';
import * as S from './styled';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps{
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, children}) => {
    return(
        <S.Content className="page-header">
            <S.TopBarConainer className="top-bar-container">
                <S.ArrowBack to='/'>
                    <img src={backIcon} alt="Voltar"/>
                </S.ArrowBack>
                <img src={logoImg} alt="Proffy"/>
            </S.TopBarConainer>

            <S.HeaderContent className="header-content">
                <strong>{title}</strong>
                {children}
            </S.HeaderContent>
        </S.Content>
    )
}

export default PageHeader;