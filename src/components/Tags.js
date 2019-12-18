import React, { Component } from "react";
import styled from "styled-components";
import Wrapper from "./tag-styles/Wrapper";
import Tag from "./tag-styles/Tag";
import Input from "./tag-styles/Input";
import TagDelete from "./tag-styles/TagDelete";

export default class TagInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTags: []
    };
    this.renderTags = this.renderTags.bind(this);
    this.onInputKeyUp = this.onInputKeyUp.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.input = React.createRef();
  }

  componentDidMount() {
    const { tags } = this.props;
    const propTags = tags.map((tag, index) => {
      return {
        index,
        ...tag
      };
    });

    this.setState(state => ({
      selectedTags: [...state.selectedTags, ...propTags]
    }));
    this.focusInput();
  }

  onInputKeyUp(e) {
    const { addTagOnEnterKeyPressed, onTagsChanged } = this.props;
    const inputValue = e.target.value;
    const inputNotEmpty = inputValue && inputValue.trim() !== "";
    const addTag = () => {
      this.setState(
        state => ({
          selectedTags: [
            ...state.selectedTags,
            {
              index: state.selectedTags.length + 1,
              displayValue: inputValue
            }
          ]
        }),
        () => {
          const { selectedTags } = this.state;

          this.clearInput();
          onTagsChanged(selectedTags);
        }
      );
    };

    if (e.key === "Enter" && inputNotEmpty && addTagOnEnterKeyPressed) {
      addTag();
    }

    if (e.keyCode === 32) {
      addTag();
    }
  }

  onInputKeyDown(e) {
    const { onTagsChanged } = this.props;
    const deleteLastTag = () => {
      this.setState(
        state => ({
          selectedTags: state.selectedTags.splice(
            0,
            state.selectedTags.length - 1
          )
        }),
        () => {
          const { selectedTags } = this.state;
          onTagsChanged(selectedTags);
        }
      );
    };

    if (e.key === "Backspace" && e.target.selectionStart === 0) {
      deleteLastTag();
    }
  }

  clearInput() {
    this.input.value = "";
  }

  focusInput() {
    this.input.focus();
  }

  removeTag(index) {
    this.setState(
      state => ({
        selectedTags: state.selectedTags.filter(tag => tag.index !== index)
      }),
      () => {
        const { selectedTags } = this.state;
        const { onTagsChanged } = this.props;
        onTagsChanged(selectedTags);
      }
    );
  }

  renderTags() {
    const { selectedTags } = this.state;
    const TagComponent = this.getTagStyledComponent();
    const Delete = this.getTagDeleteComponent();
    const DeleteIcon = this.getDeleteIcon();

    return selectedTags.length > 0
      ? selectedTags.map((tag, index) => (
          <TagComponent key={index}>
            {tag.displayValue}
            <Delete index={tag.index} onClick={() => this.removeTag(tag.index)}>
              {DeleteIcon}
            </Delete>
          </TagComponent>
        ))
      : null;
  }

  renderPlaceholder() {
    const { selectedTags } = this.state;
    const { placeholder, hideInputPlaceholderTextIfTagsPresent } = this.props;

    return hideInputPlaceholderTextIfTagsPresent && selectedTags.length > 0
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
      <InputWrapper onClick={this.focusInput}>
        <InputComponent
          ref={el => (this.input = el)}
          onChange={onInputChanged}
          placeholder={this.renderPlaceholder()}
          type="text"
          onKeyUp={this.onInputKeyUp}
          onKeyDown={this.onInputKeyDown}
        />
        {this.renderTags()}
      </InputWrapper>
    );
  }
}
