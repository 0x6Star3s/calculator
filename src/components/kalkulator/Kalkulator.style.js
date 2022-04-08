import styled from 'styled-components'

export const Calculator = styled.div`
    height: 60vh;
    min-width: 370px;
    max-width: 370px;
`

export const Display = styled.div`
    width: 100%;
    min-height: 20%;
    max-height: min-content;
    background-color:rgba(29, 27, 27, 0.151);
    box-shadow:  rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    color: white;
    word-break: break-all;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 5px;
    font-weight: bold;
`

export const Panel = styled.div`
    height: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 2px;

`

export const Button = styled.button`
    font-size: 25px;
    background-color :rgba(0,0,0,0.466);
    color: white;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all .2s ease-in-out;

    &:hover{
        background-color:rgba(0,0,0,0.546)
    }


`

export const StyleBackspace = styled.img`
    margin-top: 10px;
    width: 50%;
    height: 35%;

`

export const Equals = styled.button`
    font-size: 25px;
    background-color :rgba(0,0,0,0.466);
    color: white;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all .2s ease-in-out;

    &:hover{
        background-color:rgba(0,0,0,0.546)
    }
    grid-row: -1/-3;
    grid-column: -2/-1;

`

export const DisplayBox = styled.div`
    p{
        color: rgb(182,182,182);
        font-size: 20px;
    }
    span{
        font-size: 22px;
    }
`
export const CurrentNumber = styled.p`
    font-size: 35px;
`