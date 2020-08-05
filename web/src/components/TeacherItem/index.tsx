import React from 'react';
import * as S from './styled';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return(
        <S.TeacherItem className="teacher-item">
            <S.Header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NIH8a6IEDKHH4ST_pf5hQkFi8JtgvZ_eDAP8WzClUgpOPV9c&s" alt="Teacher Name" />
            <div>
                <strong>Teacher A</strong>
                <span>Química</span>
            </div>
            </S.Header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.         
            </p>

            <footer>
                <p>
                    Preço/hora:
                    <strong>R$: 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </S.TeacherItem>
    )
}

export default TeacherItem;