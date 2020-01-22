import styled from 'styled-components';

export const Nav = styled.div`
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 10rem;

  .like {
    
  }
`;

export const Body = styled.div`
  margin-top: 8rem;
  p {
    font-size: 1.8rem;
    color: #333333;
    padding: 1rem;
    line-height: 2.4rem;
  }

  .body-image {
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    figcaption {
      padding-top: 1rem;
      font-size: 1.3rem;
    }
  }
  img {
    margin: 0 auto;
    max-width: 500px;
  }
`;

export const StyledDetailsLeft = styled.div`
  width: 45%;
  padding: 0rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .bottom {
    display: flex;
    p {
      padding-right: 5rem;
      color: #2fc2df;
      font-style: italic;
      font-size: 1.5rem;
    }
  }

  .tags {
    display: flex;
    p {
      padding: 0.8rem;
      font-size: 1.6rem;
      font-style: italic;
      color: #b7bbc0;
    }
  }
`;

export const StyledDetailsRight = styled.div`
  width: 55%;
  img {
    width: 100%;
    max-width: 550px;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;