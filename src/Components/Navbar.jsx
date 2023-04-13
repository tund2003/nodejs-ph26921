import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#212121",
  },
  spacing: {
    paddingLeft: 20,
    color: "#fff",
    fontSize: "18px",
    textDecoration: "none",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink to="/" className={classes.spacing}>
          {" "}
          Home
        </NavLink>
        <NavLink to="all" className={classes.spacing}>
          {" "}
          All Products
        </NavLink>
        <NavLink to="add" className={classes.spacing}>
          {" "}
          Add Product
        </NavLink>

        <NavLink to="register" className={classes.spacing}>
          {" "}
          Register
        </NavLink>

        <NavLink to="login" className={classes.spacing}>
          {" "}
          Login
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
