//Exemplo de uso de Styled components

import logo from '../../imagens/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;
    color: #592202;
    
`
const LogoImage = styled.img`
  width: 130px;
  margin-right: 15px;
  border-radius: 10px;
    cursor: pointer;
    
`
function Logo () {
    return(
        <LogoContainer>
        <LogoImage src={logo} alt='logo'/>
        <p><strong> La </strong> Invernada</p>
      </LogoContainer>
    )
}

export default Logo