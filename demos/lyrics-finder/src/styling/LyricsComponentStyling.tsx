// Styled Components
import styled from 'styled-components';

const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    gap: 20px;
    width: 100vw;
    height: 100%;
    padding-top: 200px;
    padding-bottom: 200px;
    top: 0;
    height: 100vh;
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
`;

const H2Comp = styled.h2`
    color: var(--color-secondary);
    margin: 10px;
`;

const Input = styled.input`
    font-size: 15px;
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: white;
    color: black;
`;

const Button = styled.button`
    box-shadow: 0 0 4px 0 blueviolet;
    border-radius: 10px;
    color: white;
    background: var(--color-primary);

    &:not(:disabled):hover {
        border-color: #646cff;
    }

    &:disabled {
        cursor: not-allowed;
        box-shadow: none;
        background-color: gray;
    }
`;

const InputContainer = styled.div`
    border-radius: 10px;
`;

const LyricsContainer = styled.div`
    color: white;
    width: 100%;
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
`;


export { ComponentContainer, RowContainer, H2Comp, Input, Button, InputContainer, LyricsContainer }