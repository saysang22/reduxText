import React from "react";
import { useSelector } from "react-redux";

const CardView = ({result, index}) => {

    let img = "https://codingapple1.github.io/shop/shoes" + (index + 1) +".jpg"

    let a = useSelector((state) => {
        return state;
    });

    return (
            <div className="col-md-4">
                <img src= {img} alt="운동화" style={{width: '100%'}} />
                <h4>{result.title}</h4>
                <p>{result.content}</p>
            </div>
    );
};

export default CardView;
