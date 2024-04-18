import * as Icons from "react-bootstrap-icons";
import { Link, Outlet } from "react-router-dom";
import ThemeChooser from "../components/ThemeChooser";

export default function Layout() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Links />
        <div className="col py-3">
          <h1 className="mono">daw._.dev</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-gradient">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item fs-4 fw-bold">
            <Link
              to={"/"}
              className="nav-link align-middle px-0 d-flex align-items-center"
            >
              <Icons.House />
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"projects"}
              className="nav-link align-middle px-0 d-flex align-items-center"
            >
              <Icons.Laptop />
              <span className="ms-1 d-none d-sm-inline">Projects</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"hobbies"}
              className="nav-link align-middle px-0 d-flex align-items-center"
            >
              <Icons.Joystick />
              <span className="ms-1 d-none d-sm-inline">Hobbies</span>
            </Link>
          </li>
          <ThemeChooser/>
        </ul>
      </div>
    </div>
  );
}
