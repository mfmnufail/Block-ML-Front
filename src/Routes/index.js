import React from 'react'
import { Routes, Route } from "react-router-dom";
import BlockExplorer from '../Components/BlockExplorer';
import EvidentlyAI from '../Components/EvidentlyAI';
import FavouriteModel from '../Components/FavouriteModel';
import Home from '../Components/Home'
import IPFS from '../Components/IPFS';
import Model from '../Components/Model';
import Simulation from '../Components/Simulation';
import TestDataset from '../Components/TestDataset';
import TrainDataset from '../Components/TrainDataset';
import Wallet from '../Components/Wallet';

const index = () => {
  return (
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/ipfs' element={<IPFS/>}/>
          <Route path='/evident' element={<EvidentlyAI/>}/>
          <Route path='/explorer' element={<BlockExplorer/>}/>
          <Route path='/trainDataset' element={<TrainDataset/>}/>
          <Route path='/testDataset' element={<TestDataset/>}/>
          <Route path='/models' element={<Model/>}/>
          <Route path='/favModel' element={<FavouriteModel/>}/>
          <Route path='/wallet' element={<Wallet/>}/>
          <Route path='/analysis' element={<Simulation/>}/>
      </Routes>

  )
}

export default index