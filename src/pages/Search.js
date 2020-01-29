import React, { useState } from "react";
import { axiosWithAuth } from "../utilities/axios";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useAsync } from "react-async-hook";
import useConstant from "use-constant";

const useSearchHook = () => {
  const [inputText, setInputText] = useState("");
  const searchInsightly = async text => {
    var formatted = text.length < 2 ? text : text.replace(/\s/g, "+");
    try {
      const response = await axiosWithAuth().get(
        `http://localhost:5000/api/search?resources=${formatted}`
      );
      console.log(response.data);
      return response;
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
    <div>
      <div>
        <input value={inputText} onChange={e => setInputText(e.target.value)} />
      </div>
      <div>
        {search.loading && <div>Loading...</div>}
        {search.error && <div>Error: {search.error.message}</div>}
        {search.result && search.result.data && search.result.data.length ? (
          search.result.data.map(resource => (
            <div style={{ fontSize: "63px" }} key={resource.id}>
              {resource.id}
            </div>
          ))
        ) : inputText.length && !search.result ? (
          <div>Nothing Found</div>
        ) : (
          <div>{""}</div>
        )}
      </div>
    </div>
  );
};

export default Search;
