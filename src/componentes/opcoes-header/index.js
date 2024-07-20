import styled from 'styled-components'
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

// Styled component para .opcoes
const OpcoesContainer = styled.ul`
  display: flex;
`;

// Styled component para .opcao
const OpcaoItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  min-width: 120px;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`;


function OpcoesHeader() {
    return(
        <OpcoesContainer>
            { textoOpcoes.map((texto) => (
                <OpcaoItem className="opcao"><p>{texto}</p></OpcaoItem>
            ))}
        </OpcoesContainer>
    )
}

export default OpcoesHeader;