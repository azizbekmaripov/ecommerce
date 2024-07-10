import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import Slider from "../../components/Slider";
import Section from "../section/section";
import SectionTwo from "../SectionTwo/SectionTwo"


export const Shop = () => {
  return (
    <div className="shop">
      <div>

        <Slider />
      </div>
      <div className="shopTitle" id="all-products">
        <h1>Товары <span>HouseSphere</span></h1>
        <div className="new-shop">
          <div className="moon">
          <div class="linee"></div>
          <h2 className="moons">Новинки </h2>
          <div class="linee"></div>
          </div>
        </div>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      
      <Section />
      <SectionTwo />

    </div>
  );
};
