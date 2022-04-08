import styled from 'styled-components'

export const CalculatorHistory = styled.div`
    height: 60vh;
    margin: 20px;
    width: 200px;
    background-color: rgba(20,27,27,0.151);
    color: white;
    padding: 5px 5px;
    font-weight: bold;
    text-align: center;
`

export const HistoryTitle = styled.p`
        padding-bottom: 5px;
`

export const Button = styled.button`
        color: white;
        background: rgba(29,27,27,0.603);
        border: none;
        font-size: 15px;
        padding: 8px;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
        /* display: none; */
        outline: none;
        margin: 5px auto;

`

export const UlHistory = styled.ul`
        list-style: none;

`

export const LiHistory = styled.div`
  li{
      margin-top: 1rem;
  }

  hr{
      width: 100px;
      margin: auto;
  }
`