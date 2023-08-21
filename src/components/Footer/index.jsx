import styled from 'styled-components'
import colors from '../../utils/style/colors'

/**
 * Styled footer element for the footer container.
 */
const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    border-top: 2px solid ${colors.colorTextFooter};
    padding: 2rem 0 1.5rem;
`

/**
 * Styled p element for the text
 */
const FooterText = styled.p`
    margin: 0;
    padding: 0;
`

/**
 * Function component Footer - Represent the footer
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Copyright 2020 Argent Bank</FooterText>
        </FooterContainer>
    )
}

export default Footer