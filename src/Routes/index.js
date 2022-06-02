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
          <Route path='/home' element={<IPFS/>}/>
          <Route path='/home' element={<EvidentlyAI/>}/>
          <Route path='/home' element={<BlockExplorer/>}/>
      </Routes>

  )
}

export default index