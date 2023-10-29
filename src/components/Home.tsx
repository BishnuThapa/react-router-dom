import { Link } from "react-router-dom";

const home = () => {
  return (
    <>
      <h2>Home Page</h2>
      {/* <a href="/about-us">About us</a>
      <br></br>
    <a href="/contact">Contact</a> */}
      <Link to="/about-us">About</Link>
      <br></br>
      <Link to="/contact">Contact</Link>
    </>
  );
};

export default home;
