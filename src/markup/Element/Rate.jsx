import React from 'react';
import {FaStar} from 'react-icons/all';
import '../../css/rates.css'
const getRandom = () => Math.random() * 1000;
function Rate() {
    const r = getRandom();
    return (
        <div className="container-wrapper">
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row justify-content-center">
                    <div className="rating-wrapper">
                        <input type="radio" id={`5-rate-star-${r}`} name={`rate-star-${r}`} value="5"/>
                        <label htmlFor={`5-rate-star-${r}`} className="star-rating">
                            <FaStar className="d-inline-block" />
                        </label>
                        <input type="radio" id={`4-rate-star-${r}`} name={`rate-star-${r}`} value="4"/>
                        <label htmlFor={`4-rate-star-${r}`} className="star-rating star">
                            <FaStar className="d-inline-block" />
                        </label>
                        <input type="radio"  id={`3-rate-star-${r}`} name={`rate-star-${r}`} value="3"/>
                        <label htmlFor={`3-rate-star-${r}`} className="star-rating star">
                            <FaStar className="d-inline-block" />
                        </label>
                        <input type="radio" id={`2-rate-star-${r}`} name={`rate-star-${r}`} value="2"/>
                        <label htmlFor={`2-rate-star-${r}`} className="star-rating star">
                            <FaStar className="d-inline-block" />
                        </label>
                        <input type="radio" id={`1-rate-star-${r}`} name={`rate-star-${r}`} value="1"/>
                        <label htmlFor={`1-rate-star-${r}`} className="star-rating star">
                            <FaStar className="d-inline-block" />
                        </label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Rate;