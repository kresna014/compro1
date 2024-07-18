import React from "react";
import CompanyImg1 from "@/app/components/Img/huawei.png";
import CompanyImg2 from "@/app/components/Img/honda.png";
import CompanyImg3 from "@/app/components/Img/banggapakeid.png";
import CompanyImg4 from "@/app/components/Img/logotelkom.png";
import CompanyImg5 from "@/app/components/Img/rsavisena.png";
import CompanyImg6 from "@/app/components/Img/pertamina.png";
import CompanyImg7 from "@/app/components/Img/telkomsel.png";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const App = () => (
  <div>
    <div className="mb-[1.5rem] font-bold text-[22px] text-center md-text-[40px] text-black pt-36 mx-auto">
        Company Who Also Colaboration
    </div>
    <Marquee autoFill className="pt-[15px]">
      <Image className="" src={CompanyImg1} alt="" width={300} height={100} />
      <Image className="" src={CompanyImg2} alt="" width={210} height={10} />
      <Image className="" src={CompanyImg3} alt="" width={300} height={100} />
      <Image className="" src={CompanyImg4} alt="" width={300} height={100} />
      <Image className="" src={CompanyImg5} alt="" width={300} height={100} />
      <Image className="" src={CompanyImg6} alt="" width={300} height={100} />
      <Image className="" src={CompanyImg7} alt="" width={300} height={100} />
    </Marquee>
  </div>
);

export default App;
