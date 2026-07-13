import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./arrival.scss";
const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <h3 className="arrivals__title">NEW ARRIVALS</h3>
        <ul className="arrivals-list">
          <ProductCard productAmount={4} />
        </ul>

        <Link className="view-all" to="/all-products">
          View all
        </Link>
      </div>
    </section>
  );
};
export default Arrivals;
