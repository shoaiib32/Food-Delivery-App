import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  const [categoty,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={categoty} setCategory={setCategory}/>
      <FoodDisplay category={categoty}/>
      <AppDownload/>
    </div>
  )
}

export default Home
