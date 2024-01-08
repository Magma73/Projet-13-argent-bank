import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import colors from '../../../utils/style/colors'

/**
 * Styled anchor element for the link logo.
 */
const LinkMainNavItem = styled.a`
    font-weight: bold;
    color: ${colors.secondary};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover{
        text-decoration: underline;
    }
`

/**
 * Function component LogInHeader - Represent the LogInHeader Nav
 * @returns {JSX.Element} The rendered LogInHeader component.
 */
const LogInHeader = () => {
    return (
        <div>
            <LinkMainNavItem href="/login">
                <FontAwesomeIcon icon={faUserCircle} />
                &nbsp;Sign In
            </LinkMainNavItem>
        </div>
    )
}

export default LogInHeader