import React, { useState } from "react";
import { data } from "./data";
import cake from './birthday.jpg';
const Cart = () => {
    const [cardName, setCardName] = useState('card')
    const date = new Date();
    const month = date.getMonth()
    const day = date.getDate()
    return (
        <div>
            {data.map((item)=>{
                return (
                    <div>
                        {
                            item.day === day && item.month === month+1 && 
                            <div className={cardName} onClick={(e)=>setCardName('click')} >
                                <div className='img'>
                                    <img src={cake} alt='' />
                                </div>
                                <h4 className="name1">{item.name}</h4>
                                {
                                    cardName === 'click' && 
                                    <button className="btn btn1">{item.age}</button>
                                }
                            </div>
                        }
                    </div>
                )
            }) }
        </div>
    )   
}

export default Cart;