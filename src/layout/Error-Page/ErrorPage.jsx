import { Link } from "react-router-dom";
import "./error.scss";
import icon from "../../assets/icons/404-icon.png";
function ErrorPage() {
    return(
        <div className="error-page">
            <img src={icon} alt="404 Icon" className="error-page__icon" />
            <h1 className="error-page__title">Oops! Something went wrong.</h1>
            <p className="error-page__message">We're sorry, but an error occurred while loading this page.</p>
            <Link to="/" className="error-page__link">
                Go back to the homepage
            </Link>
        </div>
    )
}

export default ErrorPage;