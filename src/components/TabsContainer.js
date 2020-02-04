import React from "react";
import Tabs from "./Tabs";
import ArticleCard from "./ArticleCardWide";
import UserCard from './UserCardWide'

const Container = ({ search }) => {
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
      <div label="People"> {search.result &&
        search.result.people &&
        search.result.people.length
          ? search.result.people.map(user => (
              <UserCard user={user} key={user.fullname} />
            ))
          : ""}</div>
    </Tabs>
  );
};

export default Container;
