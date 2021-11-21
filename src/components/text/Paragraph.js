import styled from "styled-components"

function Paragraph(props) {

    const StyledParagraph = styled.p`
    font-family: 'Lato', sans-serif;
    color: ${(props) => props.theme.secondaryColour};
    font-size: ${props.fontSize};
`

    return <StyledParagraph>{props.children}</StyledParagraph>
}


export default Paragraph