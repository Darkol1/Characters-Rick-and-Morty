import React from "react";
import styled from "styled-components";

export default function Select({arr, value, ...props}){
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++ ){
       
        if ( !filteredArr.includes(arr[i][value]) && arr[i][value]){
            filteredArr.push(arr[i][value]);
        }
        if ( !arr[i][value] && !filteredArr.includes('unknown') ) filteredArr.push('unknown');
    }

    return(
    <Container {...props}>
        <Option defaultValue value={''}>All {value}</Option>
        {
            filteredArr &&
            filteredArr.map(item =>  {return <Option key={item} value={item}>{item}</Option>})
        }
    </Container>
    )
}

const Container = styled.select`
height: 48px;
border-radius: 24px;
outline: none;
padding: 8px;
width: 100%;

&:hover {
    border: 2px solid #476582;
}

&:focus {
    outline: none;
    border: 2px solid black;
}
`

const Option = styled.option`
font-size: 16px;
`