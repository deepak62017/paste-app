// import React from 'react'
import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { addToPaste, updateToPastes } from "../redux/pasteSlice";
const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] =useState()
  const [searchParams, setSearchParams] =useSearchParams();
  const dispatch = useDispatch();

  const pasteId = searchParams.get("pasteId");

  function createPaste(){
    const paste ={
      title:title,
      content: value,
      _id: pasteId || 
        Date.now().toString(36),
      createAt:new Date().toISOString(),
    }

    if(pasteId){
      //upadate
      dispatch(updateToPastes(paste));
    }
    else{
      //create
      dispatch(addToPaste(paste));
    }
    // after creation and updation 
    setTitle('');
    setValue("");
    setSearchParams({});


  }
  return (
<div>
<div className="flex  place-content-between">
   <input
     className="rounded-2xl p-1
mt-2  "
     type="text"
     placeholder="enter your 
title here"
     value={title}
     onChange={(e) => setTitle(e.
target.value)}
   />
   <button 
   onClick={createPaste} className="mx-4 h 
text-amber-500 bg-black 
rounded-2xl cursor-pointer 
p-2">
     {
       pasteId? 'Update My paste'
         :"Create My Paste"
     }
   </button>
 </div>
  <div>
    <textarea  className="mt-4 w-[500px] pl-6 pt-3 rounded-2xl"
      value={value}
      placeholder="enter content here "
      onChange={(e)=>setValue(e.target.value)}
      rows={20}
    />

    
  </div>
</div>
  )
}
export default Home
