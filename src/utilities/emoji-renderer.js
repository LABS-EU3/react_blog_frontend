const emojis = {
    cry: "😂",
    what: "😐",
    cool: "👌🏽",
    sob: "😭" 
};



const emojiRenderer = name => {
  switch (name) {
    case "sob":
      return emojis.sob;
    case "laugh":
      return emojis.laugh;
    case "cool":
      return emojis.cool;
    case "what":
      return emojis.what;
    default:
      return "";
  }
};



export default emojiRenderer;
