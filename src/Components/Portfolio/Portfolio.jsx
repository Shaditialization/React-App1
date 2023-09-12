import React from "react";
import img1 from '../../images/one.png'
import img2 from '../../images/two.png'
import img3 from '../../images/three.png'
export default function Portfolio() {
    return <>
    
        <div className="portfolioa bg-light vh-100 mt-5  ">
            <div className="container text-dark d-flex flex-column justify-content-center align-items-center my-auto">
                <div className="add mt-5">
                    <h2>PORTFOLIO COMPONENT</h2>
                </div>
                <div className="ico">
                    <i class="fa-solid fa-star text-center"></i>
                </div>
                <div className="row gy-4 mb-3 pb-5">
                    <div className="col-md-4 d-flex justify-content-center align-items-center ">
                        <img src={img1} className="w-100 rounded-3 img-fluid  " alt="" />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={img2} className="w-100 rounded-3 img-fluid" alt="" />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={img3} className="w-100 rounded-3 img-fluid" alt="" />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={img1} className="w-100 rounded-3 img-fluid" alt="" />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={img2} className="w-100 rounded-3 img-fluid" alt="" />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={img3} className="w-100 rounded-3 img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    
    </>
}