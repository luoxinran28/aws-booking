export const categories = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Books" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Electronics" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Softwares" }
];

export function getCategories() {
  return categories.filter(c => c);
}
