import styled from 'styled-components'
import colors from '../../utils/style/colors'

/**
 * Styled section element for the section container.
 */
const FeatureContainer = styled.div`
    flex: 1;
    padding: 2.5rem;
`

/**
 * Styled image element for the home logo.
 */
const FeatureLogo = styled.img`
    width: 100px;
    border: 10px solid ${colors.primary};
    border-radius: 50%;
    padding: 1rem;
`

/**
 * Styled h3 element for the title
 */
const FeatureTitle = styled.h3`
    color: ${colors.colorItemTitle};
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`
/**
 * Styled p element for the text
 */
const FeatureText = styled.p`

`

/**
 * Function component Feature Item - Represent the feature item
 * @returns {JSX.Element} The rendered feature item component.
 */
const FeatureItem = ({ src, alt, title, text }) => {
    return (
        <FeatureContainer>
            <FeatureLogo src={src} alt={alt} />
            <FeatureTitle>{title}</FeatureTitle>
            <FeatureText>{text}</FeatureText>
        </FeatureContainer>
    )
}

export default FeatureItem