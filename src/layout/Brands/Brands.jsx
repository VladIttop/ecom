import ck from "../../assets/brands/CK.png";
import gucci from "../../assets/brands/gucci.png";
import prada from "../../assets/brands/prada.png";
import versace from "../../assets/brands/versace.png";
import zara from "../../assets/brands/zara.png";
import "./brands.scss";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands-list">
          <li className="brands-list__item">
            <img src={versace} alt="brand" className="brands-list__img" />
          </li>
          <li className="brands-list__item">
            <img src={zara} alt="brand" className="brands-list__img" />
          </li>
          <li className="brands-list__item">
            <img src={gucci} alt="brand" className="brands-list__img" />
          </li>
          <li className="brands-list__item">
            <img src={prada} alt="brand" className="brands-list__img" />
          </li>
          <li className="brands-list__item">
            <img src={ck} alt="brand" className="brands-list__img" />
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Brands;
