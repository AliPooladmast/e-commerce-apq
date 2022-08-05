import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import style from "./cart.module.scss";

const Cart = () => {
  return (
    <div className={style.Container}>
      <NavBar />
      <Announcement />
      <div className={style.Wrapper}>
        <h1>YOUR BAG</h1>
        <div className={style.Top}>
          <button className={style.Button}>CONTINUE SHOPPING</button>
          <div className={style.TopTexts}>
            <span>Shopping Bag(2)</span>
            <span>Your Wishlist (0)</span>
          </div>
          <button className={style["Button--filled"]}>CHECK OUT NOW</button>
        </div>
        <div className={style.Bottom}>
          <div className={style.Info}>
            <div className={style.Product}>
              <div className={style.ProductDetail}>
                <img src="" alt="" />
                <div className={style.Detail}>
                  <span>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>ID:</b> 92523510252
                  </span>
                  <div className={style.ProductColor}></div>
                  <span>
                    <b>Size:</b> 47.3
                  </span>
                </div>
              </div>
              <div className={style.PriceDetail}>Price</div>
            </div>
          </div>
          <div className={style.Summary}>Summary</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
