import React, { Component } from "react";
import styled from "styled-components";
import {
  removeTag,
  addTag,
  loadTags
} from "../redux-store/actions/post-article-actions";
import { connect } from "react-redux";

import Wrapper from "./tag-styles/Wrapper";
import Tag from "./tag-styles/Tag";
import Input from "./tag-styles/Input";
import TagDelete from "./tag-styles/TagDelete";

class TagInput extends Component {
  constructor(props) {
    super(props);
    this.renderTags = this.renderTags.bind(this);
    this.onInputKeyUp = this.onInputKeyUp.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.input = React.createRef();
  }

  componentDidMount() {
    // const { tags } = this.props.newPost;
    // const propTags = tags.map(tag => {
    //   return tag;
    // });

    // this.props.loadTags(propTags); //WILL REVISIT
    this.focusInput();
  }

  onInputKeyUp(e) {
    const inputValue = e.target.value;
    const inputNotEmpty = inputValue && inputValue.trim() !== "";

    if (e.keyCode === 13 && inputNotEmpty) {
      this.props.addTag(inputValue);
      this.clearInput();
    }

    if (e.keyCode === 32 && inputNotEmpty) {
      this.props.addTag(inputValue);
      this.clearInput();
    }
  }

  clearInput() {
    this.input.value = "";
  }

  focusInput() {
    this.input.focus();
  }

  renderTags() {
    const { tags } = this.props.newPost;
    const TagComponent = this.getTagStyledComponent();
    const Delete = this.getTagDeleteComponent();
    const DeleteIcon = this.getDeleteIcon();

    return tags.length > 0
      ? tags.map((tag, index) => (
          <TagComponent key={index}>
            {tag.name}
            <Delete index={tag.id} onClick={() => this.props.removeTag(tag.id)}>
              {DeleteIcon}
            </Delete>
          </TagComponent>
        ))
      : null;
  }

  renderPlaceholder() {
    const { tags } = this.props.newPost;
    const { placeholder, hideInputPlaceholderTextIfTagsPresent } = this.props;

    return hideInputPlaceholderTextIfTagsPresent && tags.length > 0
      ? null
      : placeholder;
  }

  getDeleteIcon() {
    const { tagDeleteIcon } = this.props;
    return tagDeleteIcon || " x";
  }

  getTagDeleteComponent() {
    const { tagDeleteStyle } = this.props;

    return tagDeleteStyle
      ? styled(TagDelete)`
          ${tagDeleteStyle}
        `
      : TagDelete;
  }

  getTagStyledComponent() {
    const { tagStyle } = this.props;

    return tagStyle
      ? styled(Tag)`
          ${tagStyle}
        `
      : Tag;
  }

  getInputWrapperStyledComponent() {
    const { wrapperStyle } = this.props;

    return wrapperStyle
      ? styled(Wrapper)`
          ${wrapperStyle}
        `
      : Wrapper;
  }

  getInputStyledComponent() {
    const { inputStyle } = this.props;

    return inputStyle
      ? styled(Input)`
          ${inputStyle}
        `
      : Input;
  }

  render() {
    const { onInputChanged } = this.props;
    const InputWrapper = this.getInputWrapperStyledComponent();
    const InputComponent = this.getInputStyledComponent();

    return (
      <div>
        <InputWrapper onClick={this.focusInput}>
          <InputComponent
            ref={el => (this.input = el)}
            onChange={onInputChanged}
            placeholder={this.renderPlaceholder()}
            type="text"
            onKeyUp={this.onInputKeyUp}
            onKeyDown={this.onInputKeyDown}
          />
        </InputWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: "auto"
          }}
        >
          {this.renderTags()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newPost: state.newPost
  };
};

export default connect(mapStateToProps, {
  removeTag,
  addTag,
  loadTags
})(TagInput);
