export function SliceTitle({ title }) {
  if (!title || typeof title !== "string") {
    return "";
  }
  const words = title.split(" ");
  const slicedWords = words.slice(1, 3);
  const newTitle = slicedWords.join(" ");

  return `${newTitle}...`;
}
