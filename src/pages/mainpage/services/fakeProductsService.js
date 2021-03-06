import * as categoriesAPI from "./fakeCategoriesService";

const products = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "AWS S3",
    description: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis nulla a tincidunt facilisis. Fusce eu elementum felis. In hac habitasse platea dictumst. Fusce nibh nisi, consectetur a augue in, feugiat euismod risus. Vestibulum id purus ac sapien mollis lobortis. Ut aliquam ultrices magna fermentum vulputate.",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Apps" },
    numberInStock: 6,
    rating: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Becoming a Pikachu",
    description: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis nulla a tincidunt facilisis. Fusce eu elementum felis. In hac habitasse platea dictumst. Fusce nibh nisi, consectetur a augue in, feugiat euismod risus. Vestibulum id purus ac sapien mollis lobortis. Ut aliquam ultrices magna fermentum vulputate.",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "All-star Pikachu Pokemon" },
    numberInStock: 5,
    rating: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Fire TV",
    description: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis nulla a tincidunt facilisis. Fusce eu elementum felis. In hac habitasse platea dictumst. Fusce nibh nisi, consectetur a augue in, feugiat euismod risus. Vestibulum id purus ac sapien mollis lobortis. Ut aliquam ultrices magna fermentum vulputate.",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Electronics" },
    numberInStock: 8,
    rating: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Adobe Content Manager",
    description: "4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis nulla a tincidunt facilisis. Fusce eu elementum felis. In hac habitasse platea dictumst. Fusce nibh nisi, consectetur a augue in, feugiat euismod risus. Vestibulum id purus ac sapien mollis lobortis. Ut aliquam ultrices magna fermentum vulputate.",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Apps" },
    numberInStock: 7,
    rating: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Amazon AWS",
    description: "5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis nulla a tincidunt facilisis. Fusce eu elementum felis. In hac habitasse platea dictumst. Fusce nibh nisi, consectetur a augue in, feugiat euismod risus. Vestibulum id purus ac sapien mollis lobortis. Ut aliquam ultrices magna fermentum vulputate.",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Softwares" },
    numberInStock: 7,
    rating: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Dell Technologies VMware",
    description: "6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis nulla a tincidunt facilisis. Fusce eu elementum felis. In hac habitasse platea dictumst. Fusce nibh nisi, consectetur a augue in, feugiat euismod risus. Vestibulum id purus ac sapien mollis lobortis. Ut aliquam ultrices magna fermentum vulputate.",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Automotive Parts & Repairs" },
    numberInStock: 7,
    rating: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Alexa",
    description: "7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis nulla a tincidunt facilisis. Fusce eu elementum felis. In hac habitasse platea dictumst. Fusce nibh nisi, consectetur a augue in, feugiat euismod risus. Vestibulum id purus ac sapien mollis lobortis. Ut aliquam ultrices magna fermentum vulputate.",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Electronics" },
    numberInStock: 7,
    rating: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Kindle",
    description: "8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis nulla a tincidunt facilisis. Fusce eu elementum felis. In hac habitasse platea dictumst. Fusce nibh nisi, consectetur a augue in, feugiat euismod risus. Vestibulum id purus ac sapien mollis lobortis. Ut aliquam ultrices magna fermentum vulputate.",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Electronics" },
    numberInStock: 4,
    rating: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Bad Guys (The Bad Guys #1)",
    description: "9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis nulla a tincidunt facilisis. Fusce eu elementum felis. In hac habitasse platea dictumst. Fusce nibh nisi, consectetur a augue in, feugiat euismod risus. Vestibulum id purus ac sapien mollis lobortis. Ut aliquam ultrices magna fermentum vulputate.",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Appliances" },
    numberInStock: 7,
    rating: 3.5
  }
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find(m => m._id === id);
}

export function saveProduct(product) {
  let productInDb = products.find(m => m._id === product._id) || {};
  productInDb.name = product.name;
  productInDb.category = categoriesAPI.categories.find(g => g._id === product.genreId);
  productInDb.numberInStock = product.numberInStock;
  productInDb.rating = product.rating;

  if (!productInDb._id) {
    productInDb._id = Date.now();
    products.push(productInDb);
  }

  return productInDb;
}

export function deleteProduct(id) {
  let productInDb = products.find(m => m._id === id);
  products.splice(products.indexOf(productInDb), 1);
  return productInDb;
}
