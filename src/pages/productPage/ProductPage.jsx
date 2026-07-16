import Discount from "../../layout/Discount/Discount";
import Header from "../../layout/Header/Header";
import { useParams } from "react-router-dom";
import { fetchClothingProducts } from "../../API/fetch";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setNewProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClothingProducts()
      .then((data) => {
        const productArray = data?.record?.products || data;
        const foundProduct = productArray.find(
          (parameter) => parameter.id == id,
        );

        setNewProduct(foundProduct);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Discount />
      <Header />
      <section className="product-page">
        {product ? <h1>{product.title}</h1> : <h1>Product not found</h1>}
        <img src={product.images.main} alt="" />
      </section>
    </>
  );
};
export default ProductPage;
