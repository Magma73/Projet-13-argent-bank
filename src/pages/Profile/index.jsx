import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Account from "../../components/Account";
import { fetchUserProfile } from "../../slices/userProfileSlice";
import { updateUserProfile } from "../../slices/updateUserProfileSlice";

/**
 * Styled main element for the main container.
 */
const MainContainer = styled.main`
    background-color: ${colors.backgroundDark};
    flex: 1;
`
const SectionContainer = styled.section`
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
    margin: 1.35rem 0;
    font-size:2rem;
`
/**
 * Styled p element for the welcome text
 */
const WelcomeText = styled.p`
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
    &:hover {
        text-decoration: underline;
      }
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
/**
 * Styled form element for the form
 */
const FormComponent = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 460px;
    margin: 0 auto;
    padding: 0 2rem;
`
/**
 * Styled div element for the input container
 */
const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
/**
 * Styled div element for the input wrapper
 */
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 0 0.5rem;
`
/**
 * Styled label element for the label
 */
const LabelText = styled.label`
    margin-left: 0.25rem;
    font-weight: bold;
`
/**
 * Styled input element for the input
 */
const InputText = styled.input`
    width: 100%;
    padding: 8px 10px;
    font-size: 1rem;
    color:#ccc;
    border: 1px solid #ccc;
    border-radius: 3px;
`
/**
 * Styled div element for the buttons container
 */
const ButtonsContainer = styled.div`
    display: flex;
    justify-content:space-between;
    margin: 1rem 4rem;
`
/**
 * Styled button element for the button
 */
const ButtonUpdateName = styled.button`
    display: block;
    width: 100%;
    margin: 0rem 0.5rem;
    padding: 8px;
    font-size: 1rem;
    font-weight: bold;
    color:${colors.primary};
    border: 1px solid ${colors.primary};
    border-radius: 3px;
    &:hover {
        text-decoration: underline;
    }
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
    // Initializing Redux's dispatch function
    const dispatch = useDispatch();

    // Retrieving user data from local storage and session storage
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));
    const userSessionStorage = JSON.parse(sessionStorage.getItem('user'));

    // Extracting user profile and error from Redux state
    const { userProfile } = useSelector((state) => state.userProfile);
    const { error } = useSelector((state) => state.userProfile);

    // Initializing userToken variable
    let userToken = null;

    // Checking if userToken is available in local storage or session storage
    if (userLocalStorage && userLocalStorage.auth.user.body.token) {
        userToken = userLocalStorage.auth.user.body.token;
    } else if (userSessionStorage && userSessionStorage.auth.user.body.token) {
        userToken = userSessionStorage.auth.user.body.token;
    }

    // Dispatch the fetchUserProfile action to Redux
    useEffect(() => {
        // Dispatch fetchUserProfile only if the userToken is not null
        if (userToken !== null) {
            dispatch(fetchUserProfile(userToken));
        }
    }, [dispatch, userToken]);

    // State for managing form input values (username and password)
    const [displayEditButton, setdisplayEditButton] = useState(true);
    const [displayForm, setDisplayForm] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);

    // Handler for Edit button click
    const handleEditClick = () => {
        setdisplayEditButton(false);
        setDisplayForm(true);
        setShowWelcome(false);
    };

    // Handler for Save button click
    const handleSaveClick = (e) => {
        e.preventDefault();
        setdisplayEditButton(true);
        setDisplayForm(false);
        setShowWelcome(true);

        // Extracting values from form inputs
        const firstName = document.getElementById("firstname").value;
        const lastName = document.getElementById("lastname").value;

        // Check if values are not empties
        if (firstName !== '' || lastName !== '') {
            // Dispatching updateUserName action to update user profile
            dispatch(updateUserProfile({ userToken, firstName, lastName }))
                .unwrap()
                .then(() => {
                    dispatch(fetchUserProfile(userToken));
                })
                .catch(() => {
                    console.log(error);
                });
        }
    };

    // Handler for Cancel button click
    const handleCancelClick = () => {
        setdisplayEditButton(true);
        setDisplayForm(false);
        setShowWelcome(true);
    };

    // If there is an error, navigate to the login page
    if ((error !== '') || (!userProfile && ((localStorage.length === 0) || (sessionStorage.length === 0)))) {
        return <Navigate to="/login" />;
    }

    // Render the profile component if userProfile is not null
    if (userProfile !== null) {
        return (
            <MainContainer>
                <SectionContainer>
                    <HeaderTitle>
                        <WelcomeTitle>Welcome back <br />
                            {showWelcome &&
                                <WelcomeText>
                                    {/* Displaying a welcome message with the user's first and last name */}
                                    {userProfile && userProfile.firstName && userProfile.lastName && (
                                        <>
                                            {userProfile.firstName} {userProfile.lastName}
                                        </>
                                    )}!
                                </WelcomeText>}

                        </WelcomeTitle>
                        {displayEditButton &&
                            <ButtonEditName onClick={handleEditClick}>Edit Name</ButtonEditName>
                        }

                        {displayForm &&
                            <FormComponent>
                                <InputContainer>
                                    <InputWrapper>
                                        <LabelText htmlFor="firstname"></LabelText>
                                        <InputText
                                            type="text"
                                            id="firstname"
                                            name="firstname"
                                            placeholder={userProfile.firstName}
                                        />
                                    </InputWrapper>
                                    <InputWrapper>
                                        <LabelText htmlFor="lastname"></LabelText>
                                        <InputText
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            placeholder={userProfile.lastName}
                                        />
                                    </InputWrapper>
                                </InputContainer>
                                <ButtonsContainer>
                                    <ButtonUpdateName type="button" onClick={handleSaveClick}>Save</ButtonUpdateName>
                                    <ButtonUpdateName type="button" onClick={handleCancelClick} >Cancel</ButtonUpdateName>
                                </ButtonsContainer>
                            </FormComponent>
                        }

                    </HeaderTitle>
                    <SrOnlyText>Accounts</SrOnlyText>
                    {/* Mapping over AccountAmountArray and rendering Account components */}
                    {AccountAmountArray.map((account, index) => (
                        <Account key={index} title={account.title} amount={account.amount} description={account.description} />
                    ))}
                </SectionContainer>
            </MainContainer>
        )
    }
}

export default Profile