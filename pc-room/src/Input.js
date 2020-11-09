import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-size: 26px;
    display: block;
    margin-bottom: 10px;
`;

const InputItem = styled.input`
    width: 100%;
    height: 50px;
    margin-bottom: 40px;
`;

function Input({label}) {
    return (
        <>
            <Label>{label}</Label>
            <InputItem type="text" />
        </>
    )
}

export default Input;