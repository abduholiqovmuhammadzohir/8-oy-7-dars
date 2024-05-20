import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Likes from './pages/Likes'
import Musics from './pages/Musics'
import Nopages from './pages/Nopages'
import Layout from './layouts/Layout'

function App() {
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