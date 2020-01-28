import React from 'react';
import styled from 'styled-components';


const ThirdDiv = styled.div`
  text-align: center;
  /* color: #828282; */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
  width: 35%;
  margin-left: 40px;
  margin-bottom: 20px;
  background-color: white;

  img {
     width: 360px;
     /* margin: 20px; */
   }
  `;

export default function UserArticleCard(props) {
    const { title, body, photo } = props;
    return (
        <div >

            <ThirdDiv>
                <img src={photo} alt="" />
                <h3>{title}</h3>
                <p>{body}</p>


            </ThirdDiv>
        </div >
    );
}