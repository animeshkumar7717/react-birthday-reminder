import React from "react";
import { data } from "./data";
import img from './upcommingBirthday.jpg'

const UpcommingBirthday = () => {
    const date = new Date();
    const month = date.getMonth()
    const day = date.getDate()
    return (
        <div>
            {data.map((item)=>{
                return (
                    <div>
                        {
                            item.day > day && item.month === month+1 &&
                            <div className="card card-2">
                                <div className="img">
                                    <img src={img} alt='' />
                                </div>
                                <h4 className="name2">{item.name} on {item.day}</h4>
                            </div>
                        }
                    </div>
                )
            }) }
        </div>
    )   
}

export default UpcommingBirthday;