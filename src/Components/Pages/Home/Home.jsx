import HomeAdvatariseMent from "../../AdvatarismentHome/HomeAdvatariseMent";
import OpacityBanner from "../../BannerOpacity/OpacityBanner";
import BrandCard from "../../BrandCard/BrandCard";
import HomeBaner from "../../HomeBaner/HomeBaner";
import TrustedCompany from "../../TrustedCompany/TrustedCompany";

const Home = () => {
  return (
    <div>
      <HomeBaner />
      <BrandCard />
      <OpacityBanner />
      <HomeAdvatariseMent />
      <TrustedCompany />
    </div>
  );
};

export default Home;
