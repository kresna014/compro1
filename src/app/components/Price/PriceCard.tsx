import React from 'react'
import Button2 from '../Button/Button2'
import Button1 from '../Button/Button1'

interface Props {
    bg:string
    num:string
    price:string
    plan:string
}

const PriceCard = ({bg,num,plan,price} : Props) => {
    const large = num=="2"?'lg:scale-110 scale-100 z-[100]': "";
  return (
    <div className={`relative ${large} bg-gray-100 shadow-md transform`}>
        <div className={`${bg} h-[200px] flex flex-col items-center justify-center rounded-t-md`}>
            <p className='text-[20px] text-white font-[500] mb-[1rem]'>{plan}</p>
            <h1 className='text-[20px] text-white'>
            <span className='text-[30px] text-yellow-300 font-bold'>Rp.{price}/</span>
                per month
            </h1>
        </div>
        <div className='p-4 mt-[1rem] text-center'>
            <p className='rounded-md text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
                Full Access
            </p>
            <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
                Website Desain
            </p>
            <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
                Project Type
            </p>
            <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
                Motion Graphic
            </p>
            <p className='text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]'>
                Social Media Design
            </p>
            <div className='mt-[1.5rem] mb-[1.5rem] text-center'>
                {num != "2" && <Button1 text= "Choose Plan"/>}
                {num == "2" && <Button2 text= "Choose Plan"/>}
            </div>
        </div>
    </div>
  )
}

export default PriceCard
