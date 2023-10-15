//Exemplo de uso de Styled components

import Logo from '../Logo'
import OpcoesHeader from '../opcaosHeader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`

        background-color: #96a6ba96;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
       
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/"><Logo /></Link>
            <OpcoesHeader />
        </HeaderContainer>

    )
}

export default Header