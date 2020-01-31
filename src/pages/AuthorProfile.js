import React, { useEffect } from "react";
import { connect } from "react-redux";

const AuthorProfile = props => {
  const { match } = props;
  useEffect(() => {
    const authorId = match.params.id;
    console.log(authorId);
  }, [match.params.id]);
  return <div>AuthorProfile</div>;
};

export default connect(state => state, {})(AuthorProfile);
