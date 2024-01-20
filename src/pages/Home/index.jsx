import styled from 'styled-components'
import Banner from "../../components/Banner"
import Features from "../../components/Features"

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
            <MainContainer>
                <Banner />
                <Features />
            </MainContainer>
        </div>
    );
}

export default Home