import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header'
import Scrollbar from './Components/Scrollbar'
import SeasonOffer from './Components/SeasonOffer'
import GiftFinder from './Components/GiftFinder'
import TubeSlider from './Components/TubeSlider'
import FaceLotion from './Components/FaceLotion'
import SuncareSPF from './Components/SuncareSPF'
import Appointment from './Components/Appointment'
import MyStores from './Components/MyStores'
import Purchase from './Components/Purchase'
import Wishes from './Components/Wishes'
import Certification from './Components/Certification'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Scrollbar/>
    <SeasonOffer/>
    <GiftFinder/>
    <TubeSlider/>
    <FaceLotion/>
    <SuncareSPF/>
    <Appointment/>
    <MyStores/>
    <Purchase/>
    <Wishes/>
    <Certification/>
    <Footer/>
    </>
  )
}

export default Home