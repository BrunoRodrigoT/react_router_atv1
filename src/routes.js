import React from 'react'
import { Routes, Route } from 'react-router-dom'
import City from './views/city/City' 
import Music from './views/musics/Music'

function Router(){

    return(
        <Routes>
            <Route path='/music' exact component={Music}></Route>
            <Route path='/city' exact component={City}></Route>
        </Routes>
    )
}

export default Router
