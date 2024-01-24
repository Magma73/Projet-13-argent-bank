import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import colors from '../../../utils/style/colors'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../slices/auth';

/**
 * Styled div element for the container links.
 */
const ContainerLinks = styled.div`
    display:flex;
    align-items:center;
`

/**
 * Styled anchor element for the link logo.
 */
const LinkMainNavItem = styled.a`
    display:flex;
    font-weight: bold;
    color: ${colors.secondary};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover{
        text-decoration: underline;
    }
`

/**
 * Function component LogOutHeader - Represent the LogOutHeader Nav
 * @returns {JSX.Element} The rendered LogOutHeader component.
 */
const LogOutHeader = () => {
    // Access the dispatch function from React Redux
    const dispatch = useDispatch();

    const { userProfile } = useSelector((state) => state.userProfile);

    // Function to handle the logout action
    const handleLogout = () => {
        // Dispatch logout action
        dispatch(logout());
    };

    return (
        <ContainerLinks>
            {/* Display the username if available */}
            <LinkMainNavItem href="/profile">
                <FontAwesomeIcon icon={faUserCircle} />
                &nbsp;{userProfile && userProfile.firstName}
            </LinkMainNavItem>

            {/* Sign Out link with logout action */}
            <LinkMainNavItem onClick={handleLogout} href="/">
                <FontAwesomeIcon icon={faRightFromBracket} />
                &nbsp;Sign Out
            </LinkMainNavItem>
        </ContainerLinks>
    )
}

export default LogOutHeader