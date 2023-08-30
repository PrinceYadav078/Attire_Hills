import React from "react";
import MainCarousel from "../../HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../../Data/mens_kurta";
import { mensShoesPage1 } from "../../../../Data/shoes";
import { sareePage1 } from "../../../../Data/Saree/page1";
import { dressPage1 } from "../../../../Data/dress/page1";
import { gounsPage1 } from "../../../../Data/Gouns/gouns";
import { kurtaPage1 } from "../../../../Data/Kurta/kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
      <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} path={"/men/clothing/mens_kurta"}/>
      <HomeSectionCarousel data={mensShoesPage1} sectionName={"Men's Shoes"} path={"/men/clothing/shoes"}/>
      <HomeSectionCarousel data={sareePage1} sectionName={"Women's Saree"} path={"/women/clothing/saree"}/>
      <HomeSectionCarousel data={dressPage1} sectionName={"Women's Dress"} path={"/women/clothing/women_dress"}/>
      <HomeSectionCarousel data={gounsPage1} sectionName={"Women's Gouns"} path={"/women/clothing/gouns"}/>
      <HomeSectionCarousel data={kurtaPage1} sectionName={"Women's Kurtas"} path={"/women/clothing/kurtas"}/>
        
        
      </div>
    </div>
  );
};

export default HomePage;
