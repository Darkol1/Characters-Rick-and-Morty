import React from "react";
import styled from "styled-components";

export default function Footer() {
    return(
        <Container>
            <Line/>
        </Container>
    )
}

const Container = styled.div`
position: relative;
display: flex;
width: 100%;
z-index: 0;
`

const Line = styled.div`
height: 1px;
width: 100%;
background-color: #476582;
`
