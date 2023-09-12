import React from "react";
import avatar from '../../images/avataaars.svg'
export default function Startframework() {
    return <>
    

        <div className="content bg-light vh-100 d-flex justify-content-center align-items-center ">
            <div className="container text-dark d-flex flex-column justify-content-center align-items-center my-auto">

                    <img src={avatar} alt="" className="w-25" />
                <div className="sta mt-3">
                    <h2>Startframework</h2>
                </div>
                <div className="icon my-1">
                    <i class="fa-solid fa-star text-center"></i>
                </div>
                <div className="info my-1">
                    Graphic Artist - Web Designer - Illustrator
                </div>
            </div>
        </div>
        
    
    </>
}