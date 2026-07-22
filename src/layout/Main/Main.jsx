import { Link } from "react-router-dom";
import "./main.scss";
import background from "../../assets/main/main-bg.png";
import icon from "../../assets/main/icon/star-main.png";

const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <h1 className="main__title">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="main__description">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link to={"/shop"} className="shop-button">
          Shop Now
        </Link>
        <ul className="main-list">
          <li className="main-list__item">
            <p className="main-list__num">200+</p>
            <p className="main-list__description">International Brands</p>
          </li>
          <li className="main-list__item">
            <p className="main-list__num">2,000+</p>
            <p className="main-list__description">High-Quality Products</p>
          </li>
          <li className="main-list__item">
            <p className="main-list__num">30,000+</p>
            <p className="main-list__description">Happy Customers</p>
          </li>
        </ul>
      </div>
      <div className="main-images">
        <img src={background} alt="people" className="main-images__photo" />
        <img src={icon} alt="star" className="main-images__star1" />
        <img src={icon} alt="star" className="main-images__star2" />
      </div>
    </section>
  );
};
export default Main;
