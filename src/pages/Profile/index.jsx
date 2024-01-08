import React from "react";
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import styled from 'styled-components'
import colors from '../../utils/style/colors'

import Account from "../../components/Account";
import { fetchUserProfile } from "../../slices/userProfileSlice";

/**
 * Styled main element for the main container.
 */
const MainContainer = styled.main`
    background-color: ${colors.backgroundDark};
    flex: 1;
`

/**
 * Styled div element for the header title container.
 */
const HeaderTitle = styled.div`
    color: ${colors.backgroundLight};
    margin-bottom: 2rem;
`

/**
 * Styled h1 element for the title
 */
const WelcomeTitle = styled.h1`
`

/**
 * Styled button element for the button
 */
const ButtonEditName = styled.button`
    border-color: ${colors.primary};
    background-color: ${colors.primary};
    color: ${colors.backgroundLight};
    font-weight: bold;
    padding: 10px;
`
/**
 * Styled h2 element for the hidden title
 */
const SrOnlyText = styled.h2`
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
// Array contains account amount informations
const AccountAmountArray = [
    {
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        description: "Available Balance",
    },
    {
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        description: "Available Balance",
    },
    {
        title: "Argent Bank Savings ((x8349)",
        amount: "$184.302",
        description: "Current Balance",
    }
]

/**
 * Function component Profile - Render the profile page.
 * @returns {JSX.Element} - The rendered profile component.
 */
const Profile = () => {
    const dispatch = useDispatch();

    // Selecting the current user, isRecovered and userProfile from Redux state
    const { user: currentUser } = useSelector((state) => state.auth);
    const { isRecovered } = useSelector((state) => state.userProfile);
    const { userProfile } = useSelector((state) => state.userProfile);

    // Extracting userToken from currentUser or localStorage
    const userToken = currentUser?.body?.token || localStorage.getItem('userToken');

    // Dispatch the fetchUserProfile action to Redux
    useEffect(() => {
        // Dispatch fetchUserProfile only if the userProfile has not been recovered yet
        if (!isRecovered) {
            dispatch(fetchUserProfile(userToken));
        }
    }, [dispatch, isRecovered, userToken]);

    // If userProfile is not available, navigate to the login page
    if (!userProfile) {
        return <Navigate to="/login" />;
    }

    return (
        <MainContainer>
            <HeaderTitle>
                <WelcomeTitle>Welcome back <br />
                    {/* Displaying a welcome message with the user's first and last name */}
                    {userProfile && userProfile.firstName && userProfile.lastName && (
                        <>
                            {userProfile.firstName} {userProfile.lastName}
                        </>
                    )}!
                </WelcomeTitle>
                <ButtonEditName>Edit Name</ButtonEditName>
            </HeaderTitle>
            <SrOnlyText>Accounts</SrOnlyText>
            {AccountAmountArray.map((account, index) => (
                <Account key={index} title={account.title} amount={account.amount} description={account.description} />
            ))}
        </MainContainer>
    )
}

export default Profile