export default function countWords(string) {
  string = string.replace(/(^\string*)|(\string*$)/gi, "");
  string = string.replace(/[ ]{2,}/gi, " ");
  string = string.replace(/\n /, "\n");
  return string.split(" ").filter(function(str) {
    return str !== "";
  }).length;
}
