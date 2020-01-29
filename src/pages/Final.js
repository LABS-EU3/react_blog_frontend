import React, { useState, useEffect } from "react";
import {
  Wrapper,
  AnimeSection,
  InteractionSection
} from "../utilities/styles/final-stage-styles";
import { connect } from "react-redux";
import { declareInterest } from "../redux-store/actions/auths";
import { getTags } from "../redux-store/actions/onboarding-actions";

function Final(props) {
  const [stage, setStage] = useState(1);
  const [checkItems, setCheckeditems] = useState(new Map());
  const { tags, getTags } = props;
  let view;

  const handleChange = e => {
    const item = e.target.value;
    const isChecked = e.target.checked;
    console.log(e.target.checked);
    setCheckeditems(checkItems => checkItems.set(item, isChecked));
    console.log([...checkItems.keys()]);
  };

  const handleSubmit = () => {
    const interests = [...checkItems.keys()];
    props.declareInterest(interests).then(res => {
      setStage(2);
    });
  };

  useEffect(() => {
    getTags();
  }, []);

  if (stage === 1) {
    view = (
      <div>
        <div className="intro">
          <h3>How would you describe your taste?</h3>
          <small>
            Tell us what topics are you interested in, and we'll find stuff
            that's right for you!
          </small>
        </div>
        <ul className="ks-cboxtags">
          {tags
            ? tags.map((tag, index) => {
                return (
                  <li key={index}>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      id={`checkbox${index}`}
                      value={tag.name}
                    />
                    <label htmlFor={`checkbox${index}`}>{tag.name}</label>
                  </li>
                );
              })
            : ""}
        </ul>
        <div className="footer">
          <button
            onClick={() => {
              setStage(2);
            }}
          >
            Skip
          </button>
          <button onClick={handleSubmit}>Next &nbsp;&nbsp; &rarr;</button>
        </div>
      </div>
    );
  } else if (stage === 2) {
    view = <div>Hello 2</div>;
  }

  return (
    <Wrapper>
      <AnimeSection></AnimeSection>
      <InteractionSection>{view}</InteractionSection>
    </Wrapper>
  );
}

const mapStateToProps = store => {
  return {
    loading: store.auth.loading,
    login_success: store.auth.interest_success,
    tags: store.onboarding.tags
  };
};

export default connect(mapStateToProps, { declareInterest, getTags })(Final);
