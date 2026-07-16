import { useEffect, useState } from "react";
import { fetchClothingProducts } from "../../API/fetch";
import Star from "../../assets/icons/star.png";
import "./card.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ productAmount }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchClothingProducts(productAmount)
      .then((data) => setProducts(data.slice(0, productAmount)))
      .catch((err) => console.error("Failed to load products:", err));
  }, [productAmount]);

  return products.map((product) => {
    const stars = Math.floor(Math.random() * 5 + 1);

    return (
      <Link key={product.id} className="item" to={`/product/${product.id}`}>
        <img className="item__img" src={product.images.main} alt="" />
        <h2 className="item__title">{product.title}</h2>

        <div className="stars-row" style={{ display: "flex", gap: "2px" }}>
          {Array.from({ length: stars }).map((_, index) => (
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

        <p className="item__price">${product.price}</p>
      </Link>
    );
  });
};

export default ProductCard;
