import React from 'react';
import styled from 'styled-components';


export default function Popup(props) {
    const {active, setActive, item} = props;
	return (
		<Container
            active={active}
            onClick={()=> setActive(false)}
        >
			<TextContainer active={active} onClick={e=> e.stopPropagation()}>

                <Photo src={item.image} alt="pict"/>
                <Title>{item.name}</Title>
                <Info>Status: {item.status}</Info>
                <Info>Species: {item.species}</Info>
                <Info>Type: {item.type ? item.type : 'unknown'}</Info>
                <Info>Gender: {item.gender}</Info>
                <Info>Location: {item.location.name}</Info>
                

			</TextContainer>
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
    background-color: rgba(0, 0, 0, .3);
    top: 0;
    left: 0;
	width: 100vw;
	height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({ active }) => (active ? '1' : '0')};
    pointer-events: ${({ active }) => (active ? 'all' : 'none')};
    transition: 0.5s;
    z-index: 1;

`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 40px;
    border-radius: 16px;
    background-color: rgb(71,74,81);
    width: 50vw;
    transform: scale(${({ active }) => (active ? '1' : '0.5')});
    transition: 0.5s all;

    @media (max-width: 1024px) {
        padding: 20px;
        width: 70vw;
    }
`;


const Title = styled.div`
color: white;
font-size: 24px;
font-weight: 600;

@media (max-width: 1024px) {
    font-size: 18px;
}
`

const Photo = styled.img`
position: relative;
align-self: center;
width: 50%;

@media (max-width: 1024px) {
    width: 60%;
}`

const Info = styled.div`
font-size: 18px;
color: #a9a9a9;

@media (max-width: 1024px) {
    font-size: 14px;
}
`