import React from 'react'
import Header from "../Components/Header"
import Grid from "../Components/Grid"
import { useState,createContext } from 'react'
import Dummy from './Data.json'

const UserContext = createContext()


const Mainpage = () => {
    const [Data,setData] = useState(Dummy)
    const [Search, setSearch] = useState("");
    const [view, setView] = useState(false);
    const [text, setText] = useState(false);

  return (
    <UserContext.Provider value = {Data} Value = {Search}>
        <Header Data = {Data} 
                setData = {setData} 
                Dummy = {Dummy} 
                Search = {Search} 
                setSearch = {setSearch}
                text = {text}
                setview = {setView}
                view = {view}
                settext = {setText}
                />
        <Grid  Data={Data} 
               Search={Search} 
               text = {text}
              view = {view}
               /> 
    </UserContext.Provider>
  )
}

export default Mainpage