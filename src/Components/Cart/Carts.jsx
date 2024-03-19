
import Cart from "./Cart"


const Carts = ({carts}) => {
    
  return (

    <div className="text-center mx-16 mt-16 bg-teal-400 rounded-xl lg:mr-12 w-1/4 h-fit">
        <h2 className="pt-4 text-xl font-bold">Carts : {carts.length}</h2>
      {
        carts.map((cart,idx) => <Cart cart = {cart} key={idx}></Cart>)
      }
      <hr className="mt-10"/>
    </div>
  )
}

export default Carts
