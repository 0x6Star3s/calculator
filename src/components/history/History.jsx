import React from 'react'
import {CalculatorHistory, HistoryTitle, Button, UlHistory, LiHistory} from './History.style'

function History (props){
    return(
        <CalculatorHistory data-simplebar>
            <HistoryTitle>Last Calculations</HistoryTitle>
            {props.historyON && <Button onClick={props.clearHistory}>wyczyść</Button>}
            <hr />

            <UlHistory className="history">
                {props.history.map((item, index) => {
                    return(
                        <LiHistory key={index} >
                            <li>{item}</li>
                            <hr/>
                        </LiHistory>
                    )})}
            </UlHistory>
        </CalculatorHistory>
    )
}

export default History