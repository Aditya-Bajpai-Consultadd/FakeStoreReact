
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import AddProduct from './components/AddProduct';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={ <Landing />} />
        <Route path="/addProduct" element = {<AddProduct />} />
      </Routes>
    </>
  )
}

export default App
