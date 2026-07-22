import Discount from "../../layout/Discount/Discount";
import Header from "../../layout/Header/Header";
import { useParams } from "react-router-dom";
import { fetchClothingProducts } from "../../API/fetch";
import { useEffect, useState } from "react";
import Star from "../../assets/icons/star.png";
import "./productPage.scss";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setNewProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClothingProducts()
      .then((data) => {
        const productArray = data?.record?.products || data;
        const foundProduct = productArray.find(
          (parameter) => parameter.id === id,
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
      <div className="container">
        <div className="line"></div>
        <section className="product-page">
          <img
            src={product.images.main}
            alt="product-image"
            className="product-page__image"
          />
          <h3 className="product-page__title">{product.title}</h3>
          <div className="stars-row" style={{ display: "flex", gap: "2px" }}>
            {Array.from({ length: product.globalRating }).map((_, index) => (
              <img
                key={index}
                src={Star}
                alt="star"
                style={{ width: "16px", height: "16px" }}
              />
            ))}
            <p className="stars-row__star">
              {product.globalRating}/ <span className="stars-row__max">5</span>
            </p>
          </div>
          <p className="product-page__price">${product.price}</p>
          <p className="product-page__description">{product.description}</p>

          <div className="line"></div>
          <div className="colors">
            <p className="colors__title">Select Colors</p>
            <div className="colors__list">
              {product.colors.map((color, index) => {
                console.log(color.hex);
                return (
                  <div
                    key={index}
                    className="colors__circle"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="line"></div>
          <div className="size">
            <p className="size__title">Choose Size</p>
            <ul className="size-list">
              {product.sizes.map((sizeName, index) => (
                <button key={index} className="size__btn">
                  {sizeName}
                </button>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};
export default ProductPage;
