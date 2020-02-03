const emojiRenderer = name => {
  switch (name) {
    case "sob":
      return "😭";
    case "laugh":
      return "😂";
    case "cool":
      return "👌🏽";
    case "what":
      return "😐";
    default:
      return "";
  }
};

export default emojiRenderer;
