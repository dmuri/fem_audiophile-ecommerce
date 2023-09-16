import data from "./updatedData.json";

export function getProductsBySlug(slug) {
  return data.filter((elem) => elem.slug === slug);
}

export function getAllCategories() {
  return ["headphones", "speakers", "earphones"];
}

export function getProductsByCategory(category) {
  return data.filter((elem) => elem.category === category);
}
