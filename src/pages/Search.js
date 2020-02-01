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

const Container = styled(Section)``;

const StyledSearchContainer = styled.div`
  input[type="text"] {
    border: none;
    background-color: none;
    outline: 0;
    font-size: 25px;
    width: 80%;
    font-family: ${theme.fonts.Muli};
    border-bottom: 0.01rem solid grey;
    caret-color: ${theme.colors.purple};
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
        `http://localhost:5000/api/search?resources=${formatted}`
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
    <Container>
      <StyledSearchContainer>
        <input
          value={inputText}
          type="text"
          onChange={e => setInputText(e.target.value)}
          placeholder="Search Insights & People on Insightly"
          autofocus="autofocus"
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
          ""
        )}
      </div>
    </Container>
  );
};

export default Search;
