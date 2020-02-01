import React from "react";
import Tabs from "./Tabs";

const Container = ({ search, inputText }) => {
  return (
    <Tabs>
      <div label="Insights">
        {search.loading && <div>Loading...</div>}
        {search.error && <div>Error: {search.error.message}</div>}
        {search.result && search.result.length ? (
          search.result.map(resource => (
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
      <div label="People">People</div>
    </Tabs>
  );
};

export default Container;
