import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Featurecard from "./Featurecard";
import Icon1 from "@/app/_components/Img/icon1.svg";
import Icon2 from "@/app/_components/Img/icon2.svg";
import Icon4 from "@/app/_components/Img/icon4.svg";
import Icon5 from "@/app/_components/Img/icon5.svg";

const Features = () => {
  return (
    <div className="w-full pt-16 pb-10">
      <SectionHeading
        headingMini="Solution for your ideas"
        headingPrimary="EXPLORE THE SERVICE"
      />
      {/* <div className="pt-[5rem] w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex gap-[1.4rem]"> */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 px-10 pt-16 lg:justify-between lg:px-0 lg:mt-10">
          <Featurecard title="Website Desain" image={Icon1.src} />
          <Featurecard title="Project Type" image={Icon2.src} />
          <Featurecard title="Motion Graphic" image={Icon4.src} />
          <Featurecard title="Social Media Design" image={Icon5.src} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Features;
 