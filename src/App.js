import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

import Navbar from './components/navbar'

import Hem from './components/hem.js'

import Hittahit from './components/HittaHit'

import Massage from './components/massage.js'

import Present from './components/present.js'

import Hudvard from './components/hudvard'

import Footer from './components/footer'


import './App.css'

function App() {
  return (
   <Router>
   <Navbar/>

    <Routes>
      <Route path="/" element={<Hem/>} />
      <Route path="/hittahit" element={<Hittahit/>} />
      <Route path="/massage" element={<Massage/>} />
      <Route path="/present" element={<Present/>} />
      <Route path="/hudvard" element={<Hudvard/>} />

    </Routes>

    <Footer/>
   </Router>
  );
}

export default App;
