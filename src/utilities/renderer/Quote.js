import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from "react-html-parser";

const Wrapper = styled.div`
  background: #e6e6e6;
  min-height: 50px;
  color: #2e2f3e;
  font-size: 14px;
  padding: 2.0rem;
  border-left: 5px solid #2e2f3e;
  margin-top: 4rem;
  margin-bottom: 4rem;
  line-height: 23px;
`;

const QuoteOutput = (data, index) => {
  return (
    <Wrapper key={index}>
      {ReactHtmlParser(data.text)}
    </Wrapper>
  );
}

export default QuoteOutput;