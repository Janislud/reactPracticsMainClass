import { NavLink } from "react-router-dom";
import classes from "../layouts/header.module.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <NavLink
            to="/todos"
            className={({ isActive, isPending }) =>
              isPending ? classes.pending : isActive ? classes.active : ""
            }
          >
            Todos
          </NavLink>
          <NavLink
            to="/posts"
            className={({ isActive, isPending }) =>
              isPending ? classes.pending : isActive ? classes.active : ""
            }
          >
            Posts
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive, isPending }) =>
              isPending ? classes.pending : isActive ? classes.active : ""
            }
          >
            Users
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
