
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Products from './Components/Products/Products'

import Carts from './Components/Cart/Carts'

function App() {
   const [carts,setCarts] = useState([])

   const buyBtn = (product) =>{
    console.log(product)
    const alreadyAdded = carts.find(cart => cart.product_id === product.product_id)
    if(!alreadyAdded){
      const newCart = [...carts,product]
      setCarts(newCart)
    }
    
   }
  return (
    <>
      
    <div>
    <div className='m-12'>
      <Banner></Banner>
      </div>
     
       
       <div className='flex flex-col lg:flex-row tex'>
       <Products buyBtn={buyBtn} carts = {carts}></Products>
       <Carts carts={ carts}></Carts>
       </div>
      
    </div>
    
     
    </>
  )
}

export default App
