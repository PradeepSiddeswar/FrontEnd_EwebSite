import React from "react";
import Categories from "./Categories";
import Test from "./Test";
import SearchBar from "../searchbar/SearchBar";
import ProductSearchBar from "../searchbar/ProductSearchBar";
import Check from "../Accounts/Check";
import ProductCards from "./ProductCards";

import ParentComponent from "./ParentComponent";
import Greeting from "./Greeting";
import App1 from "./App1";
import Banner from "./Banner";
import BannerMob from "./BannerMob";
import CategoriesMob from "./CategoriesMob";
import Section from "./Section";
import Blog from "./Blog";
import CatBox from "./CatBox";
import Cat1Box from "./Cat1Box";
import AllProducts from "./AllProducts";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
     <div 
    className="d-none d-sm-block">  <Banner/></div>
     <div className="row d-lg-none"><BannerMob/></div>
  
    {/* <App1/>
    <Greeting/> */}
    {/* <ParentComponent/> */}
    {/* <ProductDetailsPage/> */}
    {/* <Test/> */}
   
      {/* <h1 style={{color:'#30dd1329'}}>banner image just paste here</h1> */}
      <div
    className="d-none d-sm-block">
      <Categories />
      </div>

      <div className="row d-lg-none">
      <CategoriesMob/>
      </div>
     <Check/>
     <Section/>
     <CatBox/>
     <Cat1Box/>
     <AllProducts/>
     <Footer/>
     {/* <Blog/> */}
      {/* <ProductSearchBar/>
<SearchBar/> */}
    
      {/* <Databycategory/> */}

      {/* <Test /> */}
      {/* <ProductCards/> */}
    </>
  );
};

export default Home;
