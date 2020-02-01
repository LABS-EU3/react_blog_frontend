import React from "react";
import Tabs from "./Tabs";
import ArticleCard from "./ArticleCardWide";

const Container = ({ search, inputText }) => {
  console.log(search);
  return (
    <Tabs>
      <div label="Insights">
        {search.result &&
        search.result.insights &&
        search.result.insights.length
          ? search.result.insights.map(insight => (
              <ArticleCard insight={insight} key={insight.title} />
            ))
          : ""}
      </div>
      <div label="People">People</div>
    </Tabs>
  );
};

export default Container;
