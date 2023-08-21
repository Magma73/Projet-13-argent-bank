import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import Logo from '../../assets/img/argentBankLogo.png'
import colors from '../../utils/style/colors'

/**
 * Styled header element for the header container.
 */
const HeaderContainer = styled.header`
`
/**
 * Styled nav element for the navigation container.
 */
const MainNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
`
/**
 * Styled anchor element for the link logo.
 */
const LinkLogo = styled.a`
    display: flex;
    align-items: center;
`

/**
 * Styled image element for the home logo.
 */
const HomeLogo = styled.img`
    max-width: 100%;
    width: 200px;
`
/**
 * Styled h1 element for the hidden title
 */
const SrOnlyText = styled.h1`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
`

/**
 * Styled div element for the sign in container.
 */
const SignInContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

/**
 * Styled anchor element for the link logo.
 */
const LinkSignIn = styled.a`
    font-weight: bold;
    color: ${colors.secondary};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover{
        text-decoration: underline;
    }
`

/**
 * Function component Header - Represent the header
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
    return (
        <HeaderContainer>
            <MainNav>
                <LinkLogo to="/">
                    <HomeLogo src={Logo} alt='Argent Bank Logo' />
                    <SrOnlyText>Argent Bank</SrOnlyText>
                </LinkLogo>

                <SignInContainer>
                    <LinkSignIn to="/">
                        <FontAwesomeIcon icon={faUserCircle} />
                        &nbsp;Sign In
                    </LinkSignIn>
                </SignInContainer>
            </MainNav>
        </HeaderContainer>
    )
}

export default Header