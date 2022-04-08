import React from 'react'
import Backspace from './backspace.svg'
import {Calculator, Display, Panel, Button, StyleBackspace, Equals, DisplayBox, CurrentNumber} from './Kalkulator.style'

function Kalkulator (props){
    return(
        <Calculator>
            <Display>
                <DisplayBox>
                    <p>{props.currentNumber}</p>
                    <span>{props.math}</span>
                </DisplayBox>
                <CurrentNumber>{props.previousNumber}</CurrentNumber>
            </Display>
   
            <Panel>
                <Button onClick={props.clearResult}>C</Button>
                <Button onClick={props.operate}>:</Button>
                <Button onClick={props.operate}>x</Button>
                <Button onClick={props.backspace}><StyleBackspace src={Backspace} /></Button>
                <Button onClick={props.displayNumbers}>7</Button>
                <Button onClick={props.displayNumbers}>8</Button>
                <Button onClick={props.displayNumbers}>9</Button>
                <Button onClick={props.operate}>-</Button>
                <Button onClick={props.displayNumbers}>4</Button>
                <Button onClick={props.displayNumbers}>5</Button>
                <Button onClick={props.displayNumbers}>6</Button>
                <Button onClick={props.operate}>+</Button>
                <Button onClick={props.displayNumbers}>1</Button>
                <Button onClick={props.displayNumbers}>2</Button>
                <Button onClick={props.displayNumbers}>3</Button>
                <Equals  onClick={props.showResult}>=</Equals>
                <Button onClick={props.operate}>%</Button>
                <Button onClick={props.displayNumbers}>0</Button>
                <Button onClick={props.displayNumbers}>.</Button>
            </Panel>
        </Calculator>
    )

}

export default Kalkulator;
