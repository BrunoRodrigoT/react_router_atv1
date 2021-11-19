import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Router from './routes'
import history from './services/history'
import { Link } from 'react-router-dom'



export default function App(){
  return(
    <>
      <BrowserRouter history={history}>
        <header id='header'>
            <div className='a'>
              <Link to='/music'>Minha Música Preferida</Link>
            </div>
            <div className='a'>
              <Link to='/city'>Minha Cidade Preferida</Link>
            </div>
        </header>
        <Router/>
      </BrowserRouter>
    </>
  )
}
