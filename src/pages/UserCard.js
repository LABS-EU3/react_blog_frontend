import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width: 280px;
    margin: 20px;
    box-shadow: 0px 1px 3px 0px #aaa;
    text-align: center;

    h4{
        font-size: 25px;
  
    }

    img{
    width: 280px;
    height: 280px;
    }

     p {
    font-size: 15px;
    margin-left:8px;
   
    }

    button{
    font-family: Lato;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        color: white;
        background-color: #3652BF;
        border: none;
        border-radius: 5px;
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: auto;
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