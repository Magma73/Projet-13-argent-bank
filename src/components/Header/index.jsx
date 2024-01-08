import React from "react";
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import LogInHeader from "./LogInHeader";
import LogOutHeader from "./LogOutHeader";
import Logo from '../../assets/img/argentBankLogo.png'

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
 * Styled div element for the main nav item.
 */
const MainNavItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

/**
 * Function component Header - Represent the header
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
    const location = useLocation();
    const isProfilePage = location.pathname === '/profile';

    // Extract the user profile information from the Redux store
    const userProfile = useSelector((state) => state.userProfile);

    return (
        <HeaderContainer>
            <MainNav>
                <LinkLogo href="/">
                    <HomeLogo src={Logo} alt='Argent Bank Logo' />
                    <SrOnlyText>Argent Bank</SrOnlyText>
                </LinkLogo>

                <MainNavItem>
                    {/* Render LogOutHeader on the profile page*/}
                    {isProfilePage && <LogOutHeader userProfile={userProfile.firstname} />}
                    {/* Render LogInHeader on all other pages */}
                    {!isProfilePage && <LogInHeader />}
                </MainNavItem>
            </MainNav>
        </HeaderContainer>
    )
}

export default Header