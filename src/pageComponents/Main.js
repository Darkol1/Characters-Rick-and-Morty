import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import Card from "../styledComponents/Card";
import Popup from "../styledComponents/Popup";
import Select from "../styledComponents/Select";
import Button from "../styledComponents/Button";

export default function Main(){
    const [itemForPopup, setItemForPopup] = useState(null);
    const [characters, setCharacters] = useState([]);
    const [nameSelect, setNameSelect] = useState('');
    const [statusSelect, setStatusSelect] = useState('');
    const [speciesSelect, setSpeciesSelect] = useState('');
    const [typeSelect, setTypeSelect] = useState('');
    const [genderSelect, setGenderSelect] = useState('');
    const [nextPage, setNextPage] = useState('https://rickandmortyapi.com/api/character');

    const fetchData = async (nextPage) => {
      try {
        const response = await axios.get(nextPage);
        setCharacters(response.data.results);
        return response.data;
      } catch (error) {
        return;
      }
    };

    useEffect(() => {
      fetchData(nextPage);
      setNameSelect('');
      setStatusSelect('');
      setSpeciesSelect('');
      setTypeSelect('');
      setGenderSelect('');
    }, [nextPage]);

    const handleNextLoad = async () => {
      const newData = await fetchData(nextPage);
      if (newData && newData.info.next) { 
        setNextPage(newData.info.next); 
      }
    };

    const handlePrevLoad = async () => {
      const newData = await fetchData(nextPage); 
      if (newData && newData.info.prev) { 
        setNextPage(newData.info.prev);
      }
    };

      const filteredCharacters = characters.filter(character => {
        return(character.name.includes(nameSelect) &&
        character.status.includes(statusSelect) &&
        character.species.includes(speciesSelect) &&
        character.type.includes(typeSelect) &&
        character.gender.includes(genderSelect)
    )});

    return(
        <CommonWrapper>
          <SelectWrapper>
            <Select onChange={(e) => setNameSelect(e.target.value)} arr={characters} value={'name'}/>
            <Select onChange={(e) => setStatusSelect(e.target.value)} arr={characters} value={'status'}/>
            <Select onChange={(e) => setSpeciesSelect(e.target.value)} arr={characters} value={'species'}/>
            <Select onChange={(e) => setTypeSelect(e.target.value)} arr={characters} value={'type'}/>
            <Select onChange={(e) => setGenderSelect(e.target.value)} arr={characters} value={'gender'}/>
          </SelectWrapper>

          <ButtonWrapper>
            <Button onClick={handlePrevLoad}>Back</Button>
            <Button onClick={handleNextLoad}>Next</Button>
          </ButtonWrapper>

          <Container>

            {filteredCharacters &&
            filteredCharacters.map(item => (
            <Card key={item.id} item={item} onClick={() => setItemForPopup(item)} />
            ))}

            {
            itemForPopup && 
            <Popup active={itemForPopup} setActive={setItemForPopup} item={itemForPopup} />
            }

          </Container>
        </CommonWrapper>
    )
}

const CommonWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
width: 100%;
`

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, 380px);
grid-template-rows: repeat(auto-fill, 240px);
gap: 32px;
align-items: stretch;
justify-items: stretch;
justify-content: space-around;
`

const ButtonWrapper = styled.div`
display: flex;
gap: 40px;
width: 100%;

@media (max-width: 960px) {
  flex-direction: column;
  width: 70%;
  gap: 16px;
  align-self: center;
}

@media (max-width: 600px) {
  width: 100%;
}
`

const SelectWrapper = styled.div`
display: flex;
gap: 16px;
width: 100%;

@media (max-width: 960px) {
  flex-wrap: wrap;
  width: 70%;
  gap: 16px;
  align-self: center;
}

@media (max-width: 600px) {
	flex-direction: column;
  gap: 16px;
  width: 100%;
}
`