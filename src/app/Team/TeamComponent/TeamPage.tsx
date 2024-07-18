import Image from 'next/image'
import React from 'react'

export default async function TeamPage() {
    const team = await fetch ("https://randomuser.me/api/?results=10" , {
        method: "GET" 
    })

    const data = await team.json() 
    console.log(data)
    return (
    <div className='flex justify-center flex-wrap gap-5 px-[t] rounded-lg text-center bg-white pt-6'>
      {data.results.map((item:any,idx:any) => (
        <div key={idx}>
            <Image src={item.picture.large} alt='' width={200} height={200} />
            <p>{item.name.first} {item.name.last}</p>
            <p>{item.location.city}</p>
        </div>
        
      ))}
    </div>
  )
}
