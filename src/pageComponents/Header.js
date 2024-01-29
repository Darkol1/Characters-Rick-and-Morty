import React from "react";
import styled from "styled-components";

export default function Header() {
    return(
        <Container>
            <Content>Characters Rick and Morty</Content>
            <Line/>
        </Container>
    )
}

const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
`

const Content = styled.h1`
color: white;
text-align: center;

@media (max-width: 600px) {
	font-size: 20px;
}
`

const Line = styled.div`
position: relative;
height: 1px;
width: 100%;
background-color: #476582;
`