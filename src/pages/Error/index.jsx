import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Header from "../../components/Header"
import Footer from "../../components/Footer"

/**
 * Styled main element for the main container.
 */
const MainContainer = styled.main`
    flex: 1;
    margin-bottom: 2rem;
`
/**
 * Styled paragraph element for the error message.
 */
const Message = styled.p`
    font-size:5rem;
    color:${colors.secondary};
`
/**
 * Styled anchor element for the home link.
 */
const LinkHome = styled.a`
    text-decoration:underline;
`

/**
 * Function component Error - Render the error page.
 * @returns {JSX.Element} - The rendered Error component.
 */

const Error = () => {

    return (

        <div>
            <Header />
            <MainContainer>
                <Message>Page d'erreur 404</Message>
                <LinkHome href="/">Retour à la page d'accueil</LinkHome>
            </MainContainer>

            <Footer />
        </div>
    );
}

export default Error