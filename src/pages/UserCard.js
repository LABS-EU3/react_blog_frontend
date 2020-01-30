import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width: 280px;
    margin-top: 20px;
    box-shadow: 1px 1px 1px 1px;
img{
    width:220px;
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