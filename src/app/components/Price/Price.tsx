import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import PriceCard from './PriceCard';

const Price = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <SectionHeading 
        headingMini='Deal For Your Idea' 
        headingPrimary='MEET OUR PRICING PLAN THAT SUIT YOU' 
      />
      <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-around lg:mx-[250px] gap-3 pt-20'>
        <div className='w-[300px]  transition-all duration-200 hover:scale-125'>
          <PriceCard 
            bg="bg-[#81124a]" 
            price="500 ribu" 
            num="1" 
            plan="Starter" 
          />
        </div>
        <div className='w-[300px]  transition-all duration-200 hover:scale-125'>
          <PriceCard 
            bg="bg-[#22840c]" 
            price="2,5 juta" 
            num="1" 
            plan="Premium Pack" 
          />
        </div>
        <div className='w-[300px]  transition-all duration-200 hover:scale-125'>
          <PriceCard 
            bg="bg-[#112c60]" 
            price="???" 
            num="1" 
            plan="Custom" 
          />
        </div>
      </div>
    </div>
  );
}

export default Price;
