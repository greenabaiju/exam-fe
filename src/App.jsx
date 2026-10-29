
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import {  Bounce, ToastContainer } from 'react-toastify'
import Allstud from './Allstud'
import Editstud from './Editstud'



function App() {
  
  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/allstud' element={<Allstud/>}/>
       <Route path='/editstud/:id' element={<Editstud/>}/>
     </Routes>
     <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
    </>
  )
}

export default App
