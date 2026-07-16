export function fetchClothingProducts(limit) {
  return fetch(`https://api.jsonbin.io/v3/b/6a56a087da38895dfe5dd640/latest`)
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      // console.log("Fetched data:", data.record.products);
      return data.record.products;
    });
}
