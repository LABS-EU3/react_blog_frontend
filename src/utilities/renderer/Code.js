import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #001628;
  min-height: 150px;
  color: white;
  font-size: 13px;
  padding: 2.0rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  line-height: 23px;
  padding-left: 5rem;

  pre, code {
    font-family: monospace, monospace;
  }
  pre {
    overflow: auto;
  }
  pre > code {
    display: block;
    padding: 1rem;
    word-wrap: normal;
  }
`;

const CodeOutput = (data, index) => {
  return (
    <Wrapper key={index}>
      <pre>
        <code>
        {data.code}
        </code>
      </pre>
    </Wrapper>
  );
}

export default CodeOutput;