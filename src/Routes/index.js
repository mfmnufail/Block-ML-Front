import React from 'react'
import { Routes, Route } from "react-router-dom";
import BlockExplorer from '../Components/BlockExplorer';
import EvidentlyAI from '../Components/EvidentlyAI';
import Home from '../Components/Home'
import IPFS from '../Components/IPFS';

const index = () => {
  return (
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/ipfs' element={<IPFS/>}/>
          <Route path='/evident' element={<EvidentlyAI/>}/>
          <Route path='/explorer' element={<BlockExplorer/>}/>
      </Routes>

  )
}

export default index