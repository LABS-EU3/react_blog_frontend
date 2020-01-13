export default function calculateReadTime(data) {
  let string = data;
  string = string.replace(/(^\string*)|(\string*$)/gi, "");
  string = string.replace(/[ ]{2,}/gi, " ");
  string = string.replace(/\n /, "\n");
  let count = string.split(" ").filter(function(str) {
    return str !== "";
  }).length;

  let time = Math.floor(count / 265);
  return time;
}
