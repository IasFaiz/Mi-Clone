import { useState } from "react";
import PreNav from "./Components/PreNav";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./Components/Slider";
import {
  banner,
  offer,
  starProduct,
  hotAccessories,
  hotAccessoriesCover,
  productReviews,
  videos,
  footer,
} from "./data/data.json";
import Offers from "./Components/Offers";
import StarProducts from "./Components/StarProducts";
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu";
import HotAccessories from "./Components/HotAccessories";
import Heading from "./Components/Heading";
import ProductReviews from "./Components/ProductReviews";
import Video from "./Components/Video";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <PreNav />
      <NavBar />
      <Slider start={banner.start} end={null} />
      <Offers offer={offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts starProduct={starProduct} />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/HotAccessories/music"
          element={
            <HotAccessories
              hotAccessories={hotAccessories.music}
              hotAccessoriesCover={hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/HotAccessories/smartDevice"
          element={
            <HotAccessories
              hotAccessories={hotAccessories.smartDevice}
              hotAccessoriesCover={hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/HotAccessories/home"
          element={
            <HotAccessories
              hotAccessories={hotAccessories.home}
              hotAccessoriesCover={hotAccessoriesCover.home}
            />
          }
        />
        <Route
          exact
          path="/HotAccessories/lifestyle"
          element={
            <HotAccessories
              hotAccessories={hotAccessories.lifeStyle}
              hotAccessoriesCover={hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/HotAccessories/mobileAccessories"
          element={
            <HotAccessories
              hotAccessories={hotAccessories.mobileAccessories}
              hotAccessoriesCover={hotAccessoriesCover.mobileAccessories}
            />
          }
        />
      </Routes>
      <ProductReviews productReviews={productReviews} />
      <Video videos={videos} />
      <Heading text="IN THE PRESS" />
      <Slider end={banner.end} start={null} />
      <Footer footer={footer} />
    </Router>
  );
}

export default App;
