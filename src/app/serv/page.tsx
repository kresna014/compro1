import React from "react";

import Fecthserv from "./fecthserv";

export default function Service() {
  return (
    <div>
      <Fecthserv />
    </div>
  );
}

// export default Service;

// 'use client'

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import LogoServ from '@/app/components/Img/icon1.svg';
// import LogoServ2 from '@/app/components/Img/icon2.svg';
// import LogoServ3 from '@/app/components/Img/icon3.svg';
// import LogoServ4 from '@/app/components/Img/icon4.svg';
// import LogoServ5 from '@/app/components/Img/icon5.svg';

// const items = [
//   { id: 1, src: LogoServ, subtitle: 'Subtitle 1', title: 'Title 1' },
//   { id: 2, src: LogoServ2, subtitle: 'Subtitle 2', title: 'Title 2' },
//   { id: 3, src: LogoServ3, subtitle: 'Subtitle 3', title: 'Title 3' },
//   { id: 4, src: LogoServ4, subtitle: 'Subtitle 4', title: 'Title 4' },
//   { id: 5, src: LogoServ5, subtitle: 'Subtitle 5', title: 'Title 5' },
// ];

// const Service = () => {
//   const [selectedId, setSelectedId] = useState<number | null>(null);

//   return (
//     <div className='flex flex-row'>
//       {items.map(item => (
//         <motion.div
//           key={item.id}
//           layoutId={`${item.id}`}
//           onClick={() => setSelectedId(item.id)}
//         >
//           <Image src={item.src} alt='' />
//           <motion.h5>{item.subtitle}</motion.h5>
//           <motion.h2>{item.title}</motion.h2>
//         </motion.div>
//       ))}

//       <AnimatePresence>
//         {selectedId !== null && (
//           <motion.div layoutId={`${selectedId}`}>
//             <motion.h5>{items.find(item => item.id === selectedId)?.subtitle}</motion.h5>
//             <motion.h2>{items.find(item => item.id === selectedId)?.title}</motion.h2>
//             <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Service;
