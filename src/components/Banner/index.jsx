import styled from 'styled-components'
import BannerImg from '../../assets/img/bank-tree.jpeg'

/**
 * Styled hero element for the hero container.
 */
const HeroContainer = styled.div`
    background-image: url(${BannerImg});
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;
    @media (min-width: 920px) {
          height: 400px;
          background-position: 0% 33%;
    }
`
/**
 * Styled hero element for the hero content.
 */
const HeroContent = styled.section`
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;
    @media (min-width: 920px) {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 300px;
        margin: 2rem;
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
 * Styled p element for subtitle elements.
 */
const Subtitle = styled.p`
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    @media (min-width: 920px) {
        font-size: 1.5rem;
    }
`

/**
 * Styled p element for text element.
 */
const TextContainer = styled.p`
    margin-bottom: 0;
    font-size: 0.9rem;
    @media (min-width: 920px) {
        font-size: 1.2rem;
    }
`

/**
 * Function component Header - Represent the header
 * @returns {JSX.Element} The rendered header component.
 */
const Banner = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <SrOnlyText>Promoted Content</SrOnlyText>
                <Subtitle>No fees.</Subtitle>
                <Subtitle>No minimum deposit.</Subtitle>
                <Subtitle>High interest rates.</Subtitle>
                <TextContainer>Open a savings account with Argent Bank today!</TextContainer>
            </HeroContent>
        </HeroContainer>
    )
}

export default Banner