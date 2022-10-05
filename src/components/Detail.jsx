import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {

    let { id } = useParams();
    // console.log(params)
    let data = useSelector((state) => state.dataText);
    // console.log(data)

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6">
            <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                width="100%"
            />
            </div>
            <div className="col-md-6">
            <h4 className="pt-5">{data[id].title}</h4>
            <p>{data[id].content}</p>
            <p>{data[id].price}원</p>
            <button className="btn btn-danger">주문하기</button>
            <p>{id}입니다.</p>
            </div>
        </div>
        </div>
    );
};

export default Detail;
