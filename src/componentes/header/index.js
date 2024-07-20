import Logo from '../logo'
import OpcoesHeader from '../opcoes-header'
import IconesHeader from '../opcoes-icones'
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>         
        </HeaderContainer>
    )
}

export default Header 