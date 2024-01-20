import styled from 'styled-components'
import FeatureItem from "../../components/FeatureItem"
import IconChat from "../../assets/img/icon-chat.png"
import IconMoney from "../../assets/img/icon-money.png"
import IconSecurity from "../../assets/img/icon-security.png"

/**
 * Styled section element for the section container.
 */
const FeaturesContainer = styled.section`
    display: flex;
    flex-direction: column;
    @media (min-width: 920px) {
        flex-direction: row;
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

const FeaturesArray = [
    {
        title: "You are our #1 priority",
        text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
        src: IconChat,
        alt: "Chat Icon"
    },
    {
        title: "More savings means higher rates",
        text: "The more you save with us, the higher your interest rate will be!",
        src: IconMoney,
        alt: "Money Icon"
    },
    {
        title: "Security you can trust",
        text: "We use top of the line encryption to make sure your data and money is always safe.",
        src: IconSecurity,
        alt: "Security Icon"
    }
]


/**
 * Function component Features - Represent the features section
 * @returns {JSX.Element} The rendered features component.
 */
const Features = () => {
    return (
        <FeaturesContainer>
            <SrOnlyText>Features</SrOnlyText>

            {FeaturesArray.map((feature, index) => (
                <FeatureItem key={index} src={feature.src} alt={feature.alt} title={feature.title} text={feature.text} />
            ))}

        </FeaturesContainer>
    )
}

export default Features