import { Link } from "react-router-dom";
import "./discount.scss";

function Discount() {
  return (
    <div className="discount">
      <p className="discount__text">
        Sign up and get 20% off your first order.
      </p>
      <Link to="/signup" className="discount__link">
        Sign up now
      </Link>
    </div>
  );
}
export default Discount;
