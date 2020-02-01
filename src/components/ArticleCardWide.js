import React from "react";
import styled from "styled-components";
import readTime from '../utilities/readTime'

const StyledCard = styled.div`
  display: flex;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.2);
`;

const StyledImageContainer = styled.div`
  height: 80%;
`;

const StyledTextContent = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  .info {
    display: flex;
    justify-content: space-between;
  }
`;

const Card = ({ insight }) => {
    console.log("mmm")
  return (
    <StyledCard>
      <StyledImageContainer></StyledImageContainer>
      <StyledTextContent>
        <h4>{insight.title}</h4>
        <div className="info">
          <p>{insight.author}</p>
          <p>{`${readTime(insight.body)} min read`}</p>
        </div>
      </StyledTextContent>
    </StyledCard>
  );
};

export default Card;
