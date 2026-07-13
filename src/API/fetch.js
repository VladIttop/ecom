export function fetchClothingProducts(limit) {
  return fetch(
    `https://api.escuelajs.co/api/v1/products?categoryId=1&limit=${limit}`,
  ).then((res) => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  });
};

