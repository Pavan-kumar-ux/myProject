import { Link } from "react-router-dom";

import "./index.css";

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not-found"
      className="not-found-img"
    />
    <Link to="/" className="link">Go to home page.</Link>
  </div>
);

export default NotFound;