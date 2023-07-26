const productos = [
  {
    title: "Logitech",
    id: 1,
    limit: 5,
    model: "Superlight Pro X",
    img: "/assets/img/pro-x-superlight-black-gallery-6.webp",
    price: 300,
    category: "Mouse",
  },
  {
    title: "Logitech",
    id: 2,
    limit: 5,
    model: "Superlight Pro X",
    img: "/assets/img/pro-x-superlight-black-gallery-6.webp",
    price: 300,
    category: "Mouse",
  },
  {
    title: "Logitech",
    id: 3,
    limit: 5,
    model: "Superlight Pro X",
    img: "/assets/img/pro-x-superlight-black-gallery-6.webp",
    price: 300,
    category: "Mouse",
  },
  {
    title: "Logitech",
    id: 4,
    limit: 5,
    model: "Superlight Pro X",
    img: "/assets/img/pro-x-superlight-black-gallery-6.webp",
    price: 300,
    category: "Mouse",
  },
];

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const date = new Date().toLocaleDateString;
      resolve(productos, date);
    }, 2000);
  });
}

export function getProductData(idURL) {
  return new Promise((resolve, reject) => {
    const productRequested = productos.find(
      (item) => item.id === Number(idURL)
    );

    setTimeout(() => {
      resolve(productRequested);
    }, 2000);
  });
}

export function getCategoryData(categoryURL) {
  return new Promise((resolve, reject) => {
    const categoryRequested = productos.filter((item) => {
      /* .... */
      //return (item.category.toLowerCase() === categoryURL.toLowerCase())
      return item.category.toLowerCase() === categoryURL.toLowerCase();
    });

    setTimeout(() => {
      resolve(categoryRequested);
    }, 2000);
  });
}

export default getData;
