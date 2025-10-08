
import { useState } from "react"
import {getTicket} from './helper.js'
import Ticket from './Ticket.jsx'
import Button from "./Button.jsx"



export default function Lottery({n, winCondition}){
    let [ticket, setTicket] = useState(getTicket(n))
    let isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(getTicket(n))
    }
    return(
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>    
            <br />
            <Button action={buyTicket}/>
            <h3>{isWinning && "Congratuation, You Won!"}</h3>
        </div>
    )
}