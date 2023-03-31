import React from 'react'
import Header from "../Components/Header"
import Grid from "../Components/Grid"
import { useState,createContext } from 'react'
import Dummy from './Data.json'

const UserContext = createContext()


const Mainpage = () => {
    const [Data,setData] = useState(Dummy)

  return (
    <UserContext.Provider value = {Data}>
        <Header Data = {Data} setData = {setData}/>
        <Grid  Data={Data}/> 
    </UserContext.Provider>
  )
}

export default Mainpage