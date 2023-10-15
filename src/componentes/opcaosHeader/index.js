//Exemplo de uso de Styled components
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Opcao = styled.li`
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition-property: background-color,color,text-decoration;
    color: #592202;
    

    :hover{
        transition-duration: 400ms;
        color:#000;
        background-color: #ffffffc9;
        border-radius: 32px;
        text-decoration: underline;
    }

    .whats {
        margin-left: 5px;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        cursor: pointer;
        
      }
`
const Opcoes = styled.ul`
    display: flex;
    margin-right: 70px;
`
const Paragrafo = styled.p`
padding: 10px;
`

const textoOpcoes = ["Menu","sobre","Contatos"]

function OpcoesHeader (){
    return(
        <Opcoes >
             {textoOpcoes.map((texto) => (
                    <Link to={`/${texto}`  }><Opcao key={textoOpcoes.id}><Paragrafo > {texto}</Paragrafo></Opcao></Link>
             ))}
        </Opcoes>


    )
}
export default OpcoesHeader