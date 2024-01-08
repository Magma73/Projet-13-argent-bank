import styled from 'styled-components'
import Banner from "../../components/Banner"
import Features from "../../components/Features"

// import React, { useState, useEffect } from "react"
// import AuthService from "../../services/auth.service"

// AuthService()

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
    // const [userData, setContent] = useState("");
    // const [error, setError] = useState(false);
    // useEffect(() => {
    //     UserService.getUserMainData()
    //         .then((response) => {
    //             setContent(response);
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             setError(true);
    //         });
    // }, []);


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