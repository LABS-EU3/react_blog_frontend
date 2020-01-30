import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width: 280px;
    margin-top: 20px;
    box-shadow: 1px 1px 1px 1px;
img{
    width:220px;
}
button{
    font-family: Lato;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        color: white;
        background-color: #3652BF;
        border: none;
        border-radius: 3px;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
        padding: 1rem 2rem;
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-left: 1rem;
}
`;

function UserCard(props) {
    return (
        <Div>
            <img src={props.user.avatarUrl} alt="#" />
            <h4>{props.user.fullname}</h4>
            <p>{props.user.bio}</p>
            <p>{props.user.mutualInterest}</p>
            <button>Follow</button>
        </Div>
    )
}
export default UserCard;