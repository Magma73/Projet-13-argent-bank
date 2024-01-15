import React, { useState, useEffect, useRef } from "react"
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../slices/auth";
import { clearMessage } from "../../slices/message";
import { store } from "../../app/store"

/**
 * Styled main element for the main container.
 */
const MainContainer = styled.main`
    background-color: ${colors.backgroundDark};
    flex: 1;
`

/**
 * Styled section element for the section container.
 */
const LoginContainer = styled.section`
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
`
/**
 * Styled icon element for the fontawesome icon.
 */
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 1rem;
`
/**
 * Styled h1 element for the title
 */
const FormTitle = styled.h1`
    margin: 1.2rem 0;
`
/**
 * Styled form element for the form
 */
const FormComponent = styled.form`
`
/**
 * Styled div element for the input wrapper
 */
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
`
/**
 * Styled label element for the label
 */
const LabelText = styled.label`
    font-weight: bold;
`
/**
 * Styled input element for the input
 */
const InputText = styled.input`
    padding: 5px;
    font-size: 1.2rem;
`
/**
 * Styled div element for the input remember
 */
const InputRemember = styled.div`
    display: flex;
`
/**
 * Styled input element for the input remember
 */
const InputBox = styled.input`
`
/**
 * Styled label element for the label
 */
const LabelBox = styled.label`
    margin-left: 0.25rem;
`
/**
 * Styled button element for the button
 */
const ButtonSignIn = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: ${(props) => (props.disabled ? "gray" : colors.primary)};
    background-color: ${(props) => (props.disabled ? "lightgray" : colors.primary)};
    color: ${(props) => (props.disabled ? "darkgray" : colors.backgroundLight)};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    &:hover {
        text-decoration: underline;
      }
    `
/**
 * Styled div element for the form group
 */
const FormGroup = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`
/**
 * Styled div element for the alert message
 */
const Alert = styled.div`
    font-weight: bold;
    color:${colors.colorAlert}
`

/**
 * Function component Login - Render the login page.
 * @returns {JSX.Element} - The rendered login component.
 */
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // State for tracking loading status during form submission : button submit disabled
    const [loading, setLoading] = useState(false);

    // Refs for input elements
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const isRememberRef = useRef(false);

    // State for tracking form validation errors
    const [formErrors, setFormErrors] = useState({});

    // Redux selectors to access messages from the global state
    const { message } = useSelector((state) => state.message);

    // useEffect to clear any previous messages when the component is mounted
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    // Event handler for toggling the "Remember Me" checkbox
    const handleRememberMeChange = (e) => {
        const { checked } = e.target;
        isRememberRef.current = checked;
    };

    // Event handler for form submission
    const handleLogin = (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        // Basic validation: Check if both username and password are provided
        if (!username || !password) {
            setFormErrors({
                username: !username,
                password: !password
            });
            return;
        }

        // Set loading state to true during form submission
        setLoading(true);

        // Dispatch the login action to Redux
        dispatch(login({ username, password }))
            .unwrap()
            .then(() => {
                // If  the "Remember Me" checkbox is checked, store is registered in local storage
                if (isRememberRef.current) {
                    console.log(isRememberRef);
                    localStorage.setItem('user', JSON.stringify(store.getState()));
                } else {
                    sessionStorage.setItem('user', JSON.stringify(store.getState()));
                }
                // If login is successful, navigate to the profile page and reload the window
                navigate("/profile");
            })
            .catch(() => {
                // If login fails, set loading and set form errors states back to false
                setLoading(false);
                setFormErrors(false);
            });
    };

    // Automatic redirection
    if (usernameRef && passwordRef && ((localStorage.length !== 0) || (sessionStorage.length !== 0))) {
        return <Navigate to="/profile" />;
    }

    return (
        <MainContainer>
            <LoginContainer>
                <StyledFontAwesomeIcon icon={faUserCircle} />
                <FormTitle>Sign In</FormTitle>
                <FormComponent
                    onSubmit={handleLogin}
                >
                    <InputWrapper>
                        <LabelText htmlFor="username">Username</LabelText>
                        <InputText
                            type="text"
                            id="username"
                            name="username"
                            ref={usernameRef}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <LabelText htmlFor="password">Password</LabelText>
                        <InputText
                            type="password"
                            id="password"
                            name="password"
                            ref={passwordRef}
                        />
                    </InputWrapper>
                    <InputRemember>
                        <InputBox
                            type="checkbox"
                            id="remember-me"
                            name="remember-me"
                            onChange={handleRememberMeChange}
                        />
                        <LabelBox htmlFor="remember-me">Remember me</LabelBox>
                    </InputRemember>
                    <ButtonSignIn type="submit" disabled={loading}>Sign In</ButtonSignIn>
                </FormComponent>
            </LoginContainer>

            {formErrors.username && (
                <FormGroup>
                    <Alert role="alert">Please enter a username.</Alert>
                </FormGroup>
            )}

            {formErrors.password && (
                <FormGroup>
                    <Alert role="alert">Please enter a password.</Alert>
                </FormGroup>
            )}

            {message && !formErrors.username && !formErrors.password && (
                <FormGroup>
                    <Alert role="alert">{message}</Alert>
                </FormGroup>
            )}

        </MainContainer>
    );

}
export default Login
