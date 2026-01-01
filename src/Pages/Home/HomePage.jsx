import Adidas from "../../Components/Adidas";
import BestSelling from "../../Components/BestSelling";
import Category from "../../Components/Category";
import FeaturedProduct from "../../Components/FeaturedProduct";
import FlashSale from "../../Components/FlashSale";
import HomePageSearch from "../../Components/HomePageSearch";
import LatestNews from "../../Components/LatestNews";
import MegaSale from "../../Components/MegaSale";
import Section1 from "../../Components/Section1";
import ProductGrid from "../../Components/SS-Products-Homepage/Divs";
import AllFeature from "../../Components/ThreeFeatures/AllFeature";

function HomePage() {
  return (
    <>
      <div className="smallScreen sm:hidden">
        <Section1 />
        <Category />
        <FlashSale />
        <MegaSale />
        {/* <Recommen /> */}
        <ProductGrid />
      </div>
      <div className="LargeScreen hidden sm:block">
        <Section1 />
        <BestSelling />
        <Adidas />
        <AllFeature />
        <LatestNews />
        <FeaturedProduct />
        <HomePageSearch />
      </div>
    </>
  );
}

export default HomePage;
