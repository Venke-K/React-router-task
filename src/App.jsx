import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Board/Home'
import Stack from './Components/Board/Stack'
import Science from './Components/Board/Science'
import Security from './Components/Board/Security'
import Career from './Components/Board/Career'
import Footer from './Components/Board/Footer' 
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'




function App() {

  return <>


<div className="row-content">

<BrowserRouter>
<NavBar/>
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/stack' element={<Stack/>}/>
  <Route path='/science' element={<Science/>}/>
  <Route path='/security' element={<Security/>}/>
  <Route path='/career' element={<Career/>}/>



  <Route path='*' element = {<Navigate to = '/home' />}/>
</Routes>
<Footer />
</BrowserRouter>

</div>

    
 

  
  </>
}

export default App
