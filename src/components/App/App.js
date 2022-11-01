import { Route, Routes } from 'react-router-dom'
import Home from "../Home/Home";
import Product from "../Product/Product";



function App() {


  return (
    <div className="app">

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />

      </Routes>



    </div>
  );

}




export default App;








