import { useEffect, useState } from "react"
import Product from "../Product/Product"


const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch("shopping.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-6 mx-10 ">
      {
        products.map((product,idx) => <Product product={product} key={idx} ></Product>)
      }
    </div>
  )
}

export default Products
