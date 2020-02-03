import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
    display:flex;
     flex-wrap: wrap;
    margin-top: 20px;
     width:100%;
     
     .full-width{
      width: 100%;
     }

    .footer {
      display: flex;
      justify-content: flex-end;
      padding: 20px;
      margin-top: 10rem;

      button {
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
        height: fit-content;
      }
    }
`;



const Div = styled.div`
    /* width: 150px; */
    /* margin: 20px; */
    /* box-shadow: 0px 1px 3px 0px #aaa; */
    text-align: center;

    h4{
        font-size: 15px;
  
    }

    img{
    width: 150px;
    height: 150px;
    border-radius:150px;
    margin: 20px;
    padding: 8px;
    }

    

`;

function UserCard(props) {
    return (
        <Div>
            <img src={props.user.avatarUrl} alt="#" />
            <h4>{props.user.fullname}</h4>
        
        </Div>
    )
}
export default UserCard;