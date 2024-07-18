import React from 'react'

export default async function Comprocms() {
    const team = await fetch ("https://cdn.contentful.com/spaces/um20mxssqeys/environments/master/entries?access_token=0Leq1LZDD3K7Gai9FYyO7CjRhPJVcMpY5r8LgJ_E-c0&" , {
        method: "GET" 
    })

    const data = await team.json() 
  return (
    <div>
      
    </div>
  )
}
