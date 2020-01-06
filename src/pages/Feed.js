import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DefaultNavigation from "../components/Navigation/Default";
import AuthedNavigation from "../components/Navigation/Authed";
import axios from "axios";

const mockTrendingArticles = [
  {
    title: "It's a Long Established Fact that You are Distracted",
    imageUrl:
      "https://images.unsplash.com/photo-1440985465094-6ac443aab454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Internet of Things booming 15 Trillion Market",
    imageUrl:
      "https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "10 Tech Trends to Watch at CES 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1490971588422-52f6262a237a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "These 5 Tech Trends Will Dominate 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1486649961855-75838619c131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Building a Custom React Renderer",
    imageUrl:
      "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
];

export function Feed(props) {
  const [articles, setArticles] = useState(mockTrendingArticles);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3300/api/articles")
  //     .then(res => {
  //       setArticles(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      <AuthedNavigation />
      <div>{console.log(articles)}</div>
    </div>
  );
}

export default connect(state => state, {})(Feed);
