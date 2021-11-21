import styled from "styled-components"

function HeadingH1(props) {

    const StyledHeadingH1 = styled.h1`
    font-family: 'Playfair Display', serif;
    color: ${(props) => props.theme.primaryColour};
    font-size: ${props.fontSize};
    padding: 20px 0px;
`

    return <StyledHeadingH1>{props.children}</StyledHeadingH1>
}


export default HeadingH1