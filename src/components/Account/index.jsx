import styled from 'styled-components'
import colors from '../../utils/style/colors'

/**
 * Styled section element for the section container.
 */
const AccountContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${colors.colorBorder};
    background-color: ${colors.backgroundLight};
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;
    @media (min-width: 920px) {
        flex-direction: row;
    }
    @media (min-width: 720px) {
        flex-direction: row;
    }
`

/**
 * Styled div element for the account content wrapper.
 */
const AccountContentWrapper = styled.div`
    width: 100%;
    flex: 1;
`

/**
 * Styled h3 element for the hidden title
 */
const AccountTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
`

/**
 * Styled p element for the account amount container.
 */
const AccountAmount = styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
`

/**
 * Styled p element for the account amount description container.
 */
const AccountAmountDescription = styled.p`
    margin: 0;
`

/**
 * Styled div element for the account content wrapper cta.
 */
const AccountContentWrapperCta = styled.div`
    width: 100%;
    flex: 1;
    @media (min-width: 720px) {
        flex: 0;
    }
`

/**
 * Styled button element for the transaction button.
 */
const TransactionButton = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color:  ${colors.primary};
    background-color:  ${colors.primary};
    color:  ${colors.backgroundLight};
    @media (min-width: 720px) {
        width: 200px;
    }
`

const Account = ({ title, amount, description }) => {
    return (
        <AccountContainer>
            <AccountContentWrapper>
                <AccountTitle>{title}</AccountTitle>
                <AccountAmount>{amount}</AccountAmount>
                <AccountAmountDescription>{description}</AccountAmountDescription>
            </AccountContentWrapper>
            <AccountContentWrapperCta>
                <TransactionButton>View transactions</TransactionButton>
            </AccountContentWrapperCta>
        </AccountContainer>
    )
}

export default Account