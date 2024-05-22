import React, {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Likes from './pages/Likes'
import Musics from './pages/Musics'
import Nopages from './pages/Nopages'
import Layout from './layouts/Layout'
import { getToken } from './components/utils'
import {useDispatch} from "react-redux"
import { create } from './redux/authSlice'

function App() {
  const dispatch = useDispatch();
  useEffect (() => {
    getToken()
    .then(res => {
      console.log(16,res);
      dispatch(create(res))
    })
    .catch(err => {
      console.log(err);
    })
  },[])

  return (  
    <div>
      <Routes>
        <Route path='/' element={<Layout><Home></Home></Layout>}></Route>
        <Route path='/likes' element={<Layout><Likes></Likes></Layout>}></Route>
        <Route path='/playlist/:id' element={<Layout><Musics></Musics></Layout>}></Route>
        <Route path='*' element={<Nopages></Nopages>}></Route>
      </Routes>
    </div>
  )
}

export default App