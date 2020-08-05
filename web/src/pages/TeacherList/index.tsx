import React from 'react';
import * as S from './styled';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherList(){
    return(
        <S.PageTeacherList id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <S.SearchTeachers id="search-teachers">
                    <S.InputBlock className="input-block">
                        <S.InputBlockLabel  htmlFor="subject">Matérias</S.InputBlockLabel >
                        <S.InputBlockInput type="text"  id="subject"/>
                    </S.InputBlock>

                    <S.InputBlock className="input-block">
                        <S.InputBlockLabel htmlFor="week-day">Dia da semana</S.InputBlockLabel>
                        <S.InputBlockInput type="text"  id="week-day"/>
                    </S.InputBlock>

                    <S.InputBlock className="input-block">
                        <S.InputBlockLabel htmlFor="time">Hora</S.InputBlockLabel>
                        <S.InputBlockInput type="text"  id="time"/>
                    </S.InputBlock>
                </S.SearchTeachers>
            </PageHeader>

            <S.TeacherList>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </S.TeacherList>

        </S.PageTeacherList>
        
    )
}

export default TeacherList;