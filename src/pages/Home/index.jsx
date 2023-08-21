import styled from 'styled-components'
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Features from "../../components/Features"
import Footer from "../../components/Footer"


/**
 * Styled main element for the main container.
 */
const MainContainer = styled.main`
    flex: 1;
`

/**
 * Function component Home - Render the home page.
 * @returns {JSX.Element} - The rendered Home component.
 */

const Home = () => {

    return (

        <div>
            <Header />

            <MainContainer>
                <Banner />
                <Features />
            </MainContainer>

            <Footer />
        </div>
    );
}

export default Home