import React, { useState } from "react";
import { axiosWithAuth } from "../utilities/axios";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useAsync } from "react-async-hook";
import useConstant from "use-constant";
import Tabs from "../components/TabsContainer";
import styled from "styled-components";
import { Section } from "../styles/shared";
import theme from "../styles/theme";
import Loader from "./Loader";
import binocular from "../assets/binocular.png";
import AuthedNavigation from "../components/Navigation/Authed";
import media from "../styles/mediaQueries";
import { apiURL } from '../utilities/urls';

const Container = styled(Section)`
  margin-top: 10rem;
`;

const StyledSearchContainer = styled.div`
  input[type="text"] {
    border: none;
    background-color: none;
    outline: 0;
    font-size: 25px;
    width: 100%;
    font-family: ${theme.fonts.Muli};
    border-bottom: 1px solid rgba(0,0,0,.15);
    caret-color: ${theme.colors.purple};
    ${media.phablet`font-size: 18px;`}
  }
`;
const StyledBlank = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  img {
    padding: 1rem;
    padding-left: 0;
    object-fit: cover;
    max-height: 440px;
    width: auto;
    margin: 0 auto;
    filter: grayscale(100%);
    align-self: center;
  }
`;
const StyledLoaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 25%;
  height: 100vh !important;
`;

const useSearchHook = () => {
  const [inputText, setInputText] = useState("");
  const searchInsightly = async text => {
    var formatted = text.length < 2 ? text : text.replace(/\s/g, "+");
    try {
      const response = await axiosWithAuth().get(
        `${apiURL}/search?resources=${formatted}`
      );
      console.log(response.data.insights);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedSearchInsightly = useConstant(() =>
    AwesomeDebouncePromise(searchInsightly, 300)
  );

  const search = useAsync(async () => {
    if (inputText.length === 0) {
      return [];
    } else {
      return debouncedSearchInsightly(inputText);
    }
  }, [inputText]);

  return {
    inputText,
    setInputText,
    search
  };
};

const Search = () => {
  const { inputText, setInputText, search } = useSearchHook();
  return (
    <>
      <AuthedNavigation />
      <Container>
        <StyledSearchContainer>
          <input
            value={inputText}
            type="text"
            onChange={e => setInputText(e.target.value)}
            placeholder="Search Insights & People on Insightly"
            autoFocus="autofocus"
          />
        </StyledSearchContainer>
        <div>
          {search.loading ? (
            <StyledLoaderContainer>
              <Loader />{" "}
            </StyledLoaderContainer>
          ) : inputText.length ? (
            <Tabs search={search} inputText={inputText} />
          ) : (
            <StyledBlank>
              <img src={binocular} alt="blank-search-binocular" />
            </StyledBlank>
          )}
        </div>
      </Container>
    </>
  );
};

export default Search;
