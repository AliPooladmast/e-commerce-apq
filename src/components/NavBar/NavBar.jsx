import { Badge } from "@mui/material";
import {
  HowToReg,
  Login,
  Logout,
  Person,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./NavBar.module.scss";
import { userRequest } from "../../requestMethods";
import { logout } from "../../redux/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    userRequest.defaults.headers.token = "";
  };

  return (
    <div className={style.Container}>
      <div className={style.Left}>
        <Link to="/" className={style.Link}>
          <h1 className={style.Logo}>E-Shop Client</h1>
        </Link>
        <div className={style.SearchContainer}>
          <input className={style.Input} placeholder="Search"></input>
          <Search className={style.Search} />
        </div>
      </div>
      <div className={style.Right}>
        {currentUser ? (
          <>
            <div className={style.Item} onClick={handleLogout}>
              <Logout />
              <span>Logout</span>
            </div>
            <div className={style.Item}>
              <Person />
              <span>Profile</span>
            </div>
          </>
        ) : (
          <>
            <Link to="/register" className={style.Link}>
              <div className={style.Item}>
                <HowToReg />
                <span>Register</span>
              </div>
            </Link>
            <Link to="/login" className={style.Link}>
              <div className={style.Item}>
                <Login />
                <span>Sign In</span>
              </div>
            </Link>
          </>
        )}
        <Link to="/cart" className={style.Link}>
          <div className={style.Item}>
            <Badge
              badgeContent={quantity}
              color="primary"
              overlap="rectangular"
              className={style.Badge}
            >
              <ShoppingCartOutlined />
            </Badge>
            <span>Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
