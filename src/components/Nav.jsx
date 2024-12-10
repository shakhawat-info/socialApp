import React, { useRef, useState } from 'react'
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import { MdKeyboardBackspace } from "react-icons/md";

const Nav = () => {

  let searchBox = useRef();
  let logo = useRef();
  let CloseSearch = useRef();
  let FormSearch = useRef();
  let SearchInput = useRef();

  function name (form){
    
    logo.current.style.display = 'none';

    CloseSearch.current.style.display = 'inline-block';

    searchBox.current.classList.add('SearchExtend')
    
    FormSearch.current.classList.add('formBorder')
    form.stopPropagation();

  }

  let CloseSearchbox = ()=>{

    logo.current.style.display = 'inline-block';

    CloseSearch.current.style.display = 'none';

    searchBox.current.classList.remove('SearchExtend')
    
    FormSearch.current.classList.remove('formBorder')

    SearchInput.current.value = ''

  }


  return (
    <nav className='absolute top-0 left-0 w-full bg-white py-2 shadow-[rgba(27,31,35,0.04)_0px_2px_0px,rgba(255,255,255,0.25)_0px_2px_0px_inset]'>
      <div className="flex p-2 items-center justify-between ">
        <a href="#" ref={logo} className='font-ununtu text-[rgb(255,4,92)] text-[30px] capitalize font-black tracking-[2px]; '>Ochigram</a>
        <div ref={searchBox} className=" flex items-center gap-x-2 ">
        
        <button type='button' onClick={CloseSearchbox} ref={CloseSearch} className='hidden text-3xl'><MdKeyboardBackspace /></button>
        <form action="#" ref={FormSearch}  onClick={name} className=' relative w-full '>
          <input ref={SearchInput}   type="search" placeholder='search' className='w-full py-1 outline-none px-2 pl-9'/>
          <button  type='button' className='absolute top-[15%] left-0 text-2xl '><MdOutlineYoutubeSearchedFor /></button>
        </form>

        </div>
      </div>
    </nav>
  )
}

export default Nav