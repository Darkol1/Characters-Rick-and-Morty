import React from "react";
import styled from "styled-components";

export default function Card({item, ...props}){
    return(
        <Container {...props}>
            <Picture src={item.image} alt='picture'/>
            <TextContent>
                <Name>{item.name}</Name>
                <Attribute>Status</Attribute>
                <Value>{item.status}</Value>
                <Attribute>Gender</Attribute>
                <Value>{item.gender}</Value>
            </TextContent>
        </Container>
    )
}

const Container = styled.div`
position: relative;
display: flex;
width: 100%;
background-color: rgb(71,74,81);
border-radius: 16px;
cursor: pointer;
height: 240px;
`

const Picture = styled.img`
position: relative;
width: 50%;
height: auto;
object-fit: cover;
`

const TextContent = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
padding: 16px;
`

const Attribute = styled.span`
color: #abb2bf;
font-size: 14px;

@media (max-width: 1024px) {
    font-size: 12px;
}`

const Name = styled.div`
color: white;
font-size: 24px;
font-weight: 600;
margin-bottom: 8px;

@media (max-width: 1024px) {
    font-size: 18px;
    margin: 0;
}
`

const Value = styled.span`
color: white;
font-size: 18px;
font-weight: 600;

@media (max-width: 1024px) {
    font-size: 16px;
}
`