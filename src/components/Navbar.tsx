// 'use client'

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useSession, signOut } from 'next-auth/react';
// import { User } from 'next-auth';
// import Image from 'next/image';
// import { Menu , X } from 'lucide-react';

// function Navbar() {
//   const { data: session } = useSession();
//   const user: User = session?.user;

//   const [nav, setNav] = useState(false);
//   const links = [
//     {
//       id: 1,
//       name: "Home",
//       link: "/"
//     },
//     {
//       id: 2,
//       name: "Dashboard",
//       link: "/dashboard"
//     },
//     {
//       id: 3,
//       name: "User Guid",
//       link: "/guidbook"
//     },


//   ]

//   return (

//     <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black'>
      
//       <div className='flex justify-center items-center'>
//         <Image src ='/images/AMLOGO.png' alt='Logo' width ={80} height={60}/>
//         <h1 className='text-lg md:text-2xl  hover:cursor-default'> Anonymus Messages </h1>
//       </div>

//       <ul className='hidden md:flex'>

//         {links.map(({ id, name, link }) => (
//           <li key={id} className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200 text-lg'>
//             <Link href={link} >{name}</Link>
//           </li>
//         ))}
//         {session ? (
//             <li  className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200 text-lg'>
//             <Link href={'/sign-in'}  onClick={() => {signOut()}}>LogOut</Link>
//           </li>
//           ) : (<li  className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200 text-lg'>
//           <Link href={'/sign-in'}  >LogIn</Link>
//         </li>)}


//       </ul>

//       <div onClick={() => setNav(!nav)} className=' cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
//         {nav ? <X/> : <Menu/>}
//       </div>

//       {nav && (
//         <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700'>

//           {links.map(({ id, name, link }) => (
//             <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-105 duration-200'>
//               <Link href={link} onClick={() => setNav(!nav)}>{name}</Link>
//             </li>
//           ))}
//           {session ? (
//             <li  className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-105 duration-200'>
//             <Link href={'/sign-in'}  onClick={() => {setNav(!nav);signOut()}}>LogOut</Link>
//           </li>
//           ) : (<li  className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-105 duration-200'>
//           <Link href={'/sign-in'}  onClick={() => setNav(!nav)}>LogIn</Link>
//         </li>)}

//         </ul>
//       )}

//     </div>


//   );
// }

// export default Navbar;


'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { User } from 'next-auth';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const { data: session } = useSession();
  const user: User = session?.user;

  const [nav, setNav] = useState(false);

  useEffect(() => {
    // Disable body scroll and interactions when the mobile menu is open
    document.body.style.overflow = nav ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [nav]);

  const links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Dashboard", link: "/dashboard" },
    { id: 3, name: "User Guid", link: "/guidbook" },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black relative'>
      
      <div className='flex justify-center items-center'>
        <Image src='/images/AMLOGO.png' alt='Logo' width={80} height={60} />
        <h1 className='text-lg md:text-2xl hover:cursor-default'> Anonymous Messages </h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, name, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200 text-lg'>
            <Link href={link}>{name}</Link>
          </li>
        ))}
        {session ? (
          <li className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200 text-lg'>
            <Link href={'/sign-in'} onClick={() => signOut()}>LogOut</Link>
          </li>
        ) : (
          <li className='px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200 text-lg'>
            <Link href={'/sign-in'}>LogIn</Link>
          </li>
        )}
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-40 text-gray-500 md:hidden'>
        {nav ? <X /> : <Menu />}
      </div>

      {nav && (
        <div className='fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 z-30 flex flex-col justify-center items-center overflow-hidden'>
          <ul className='flex flex-col items-center'>
            {links.map(({ id, name, link }) => (
              <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-105 duration-200'>
                <Link href={link} onClick={() => setNav(false)}>{name}</Link>
              </li>
            ))}
            {session ? (
              <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-105 duration-200'>
                <Link href={'/sign-in'} onClick={() => { setNav(false); signOut(); }}>LogOut</Link>
              </li>
            ) : (
              <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-105 duration-200'>
                <Link href={'/sign-in'} onClick={() => setNav(false)}>LogIn</Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
