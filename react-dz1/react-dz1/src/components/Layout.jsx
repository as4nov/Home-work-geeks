import { NavLink, Outlet } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to={"/post-creation"}>
              Create Post
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>made by acided</footer>
    </>
  );
};
export default Layout;
